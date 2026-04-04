/**
 * agents/content-writer.js
 *
 * Content writer agent for Caramel Digital Studio v2.
 * Fetches trending research from PubMed and GitHub, then generates
 * thought-leadership article drafts saved to content/drafts/.
 *
 * Usage:
 *   pnpm exec openclaw run agents/content-writer.js
 *   node agents/content-writer.js
 */

"use strict";

const https = require("https");
const fs = require("fs");
const path = require("path");

const PROMPT = `
You are a content strategist and writer for Caramel Digital Studio, a boutique web
design and digital content studio based in Cape Town, South Africa.
Using the source material below (PubMed abstracts and GitHub trending projects),
write a 600–900 word thought-leadership article in Markdown format.
- Angle the article toward small business owners who need better digital presence.
- Cite the sources naturally in the text (no footnotes required).
- Include a compelling title, a 2-sentence meta description, and 3–5 relevant tags.
- Output valid Markdown with YAML front-matter at the top.
`;

const DRAFTS_DIR = path.join(process.cwd(), "content", "drafts");

/** Perform a simple HTTPS GET and return the response body as a string. */
function get(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, { headers: { "User-Agent": "caramel-content-agent/1.0" } }, (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => resolve(data));
      })
      .on("error", reject);
  });
}

/** Fetch the top N PubMed article titles for a search term. */
async function fetchPubMed(term, maxResults = 3) {
  try {
    const searchUrl =
      `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi` +
      `?db=pubmed&retmode=json&retmax=${maxResults}&term=${encodeURIComponent(term)}`;
    const searchData = JSON.parse(await get(searchUrl));
    const ids = searchData.esearchresult?.idlist ?? [];

    if (ids.length === 0) return [];

    const summaryUrl =
      `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi` +
      `?db=pubmed&retmode=json&id=${ids.join(",")}`;
    const summaryData = JSON.parse(await get(summaryUrl));
    const result = summaryData.result ?? {};

    return ids.map((id) => ({
      id,
      title: result[id]?.title ?? "Unknown title",
      source: `https://pubmed.ncbi.nlm.nih.gov/${id}/`,
    }));
  } catch (err) {
    console.warn("⚠️  PubMed fetch failed:", err.message);
    return [];
  }
}

/** Fetch GitHub trending repositories (public API). */
async function fetchGitHubTrending(language = "", limit = 3) {
  try {
    const query = language ? `language:${language}` : "stars:>1000";
    const url =
      `https://api.github.com/search/repositories` +
      `?q=${encodeURIComponent(query)}&sort=stars&order=desc&per_page=${limit}`;
    const data = JSON.parse(await get(url));
    return (data.items ?? []).map((repo) => ({
      name: repo.full_name,
      description: repo.description ?? "",
      stars: repo.stargazers_count,
      url: repo.html_url,
    }));
  } catch (err) {
    console.warn("⚠️  GitHub trending fetch failed:", err.message);
    return [];
  }
}

/** Save a Markdown draft to the drafts directory. */
function saveDraft(title, content) {
  fs.mkdirSync(DRAFTS_DIR, { recursive: true });
  const safeTitle = typeof title === "string" && title.length > 0 ? title : "draft";
  const slug = safeTitle
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  const date = new Date().toISOString().slice(0, 10);
  const filename = `${date}-${slug}.md`;
  const filePath = path.join(DRAFTS_DIR, filename);
  fs.writeFileSync(filePath, content, "utf8");
  return filePath;
}

async function run() {
  console.log("✍️  Caramel Digital Studio — Content Writer\n");

  // --- Gather source material ---
  const [pubmedArticles, githubRepos] = await Promise.all([
    fetchPubMed("digital marketing small business"),
    fetchGitHubTrending("javascript"),
  ]);

  console.log(`PubMed articles fetched: ${pubmedArticles.length}`);
  console.log(`GitHub trending repos fetched: ${githubRepos.length}`);

  const sourceMaterial = { pubmed: pubmedArticles, github: githubRepos };

  // --- Build prompt payload ---
  const fullPrompt = `${PROMPT}\n\n## Source Material\n\`\`\`json\n${JSON.stringify(
    sourceMaterial,
    null,
    2
  )}\n\`\`\``;

  console.log("\n📋 Source material collected. Sending to LLM...\n");
  console.log("PROMPT:\n", fullPrompt);

  // Placeholder draft when @openclaw/cli is not yet installed.
  // When @openclaw/cli is installed, replace this block with:
  // const { OpenClaw } = require("@openclaw/cli");
  // const agent = new OpenClaw();
  // const draft = await agent.run(fullPrompt);
  // const savedPath = saveDraft("generated-article", draft);
  // console.log(`\n✅ Draft saved to: ${savedPath}`);

  const placeholderDraft = `---
title: "Placeholder Draft — Run with OpenClaw to generate"
date: "${new Date().toISOString().slice(0, 10)}"
tags: ["digital-marketing", "small-business", "ai"]
description: "This draft will be replaced by LLM-generated content once @openclaw/cli is configured."
---

# Placeholder Draft

Install and configure \`@openclaw/cli\` with Ollama running locally, then re-run:

\`\`\`bash
pnpm exec openclaw run agents/content-writer.js
\`\`\`

## Source Material Summary

### PubMed
${pubmedArticles.map((a) => `- [${a.title}](${a.source})`).join("\n") || "_No results_"}

### GitHub Trending
${githubRepos.map((r) => `- [${r.name}](${r.url}) — ${r.description}`).join("\n") || "_No results_"}
`;

  const savedPath = saveDraft("placeholder-draft", placeholderDraft);
  console.log(`\n✅ Draft saved to: ${savedPath}`);
}

run().catch((err) => {
  console.error("Content writer failed:", err);
  process.exit(1);
});
