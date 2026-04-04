/**
 * agents/audit-site.js
 *
 * Site audit agent for Caramel Digital Studio v2.
 * Checks Tailwind version currency, SEO metadata, and performance signals.
 *
 * Usage:
 *   pnpm exec openclaw run agents/audit-site.js
 *   node agents/audit-site.js
 */

"use strict";

const https = require("https");
const fs = require("fs");
const path = require("path");

const PROMPT = `
You are a web-quality auditor for Caramel Digital Studio v2.
Given the audit data below, produce a concise Markdown report with three sections:
1. **Tailwind CSS** – Is the installed version up to date? List any important changes.
2. **SEO** – Evaluate the metadata found. Highlight gaps or improvements.
3. **Performance** – Comment on bundle size, image optimisation, and Core Web Vitals risks.
Finish with a prioritised action list.
`;

/** Fetch the latest version of a package from the npm registry. */
function fetchLatestVersion(pkg) {
  return new Promise((resolve, reject) => {
    const url = `https://registry.npmjs.org/${encodeURIComponent(pkg)}/latest`;
    https
      .get(url, (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => {
          try {
            resolve(JSON.parse(data).version);
          } catch {
            reject(new Error(`Failed to parse npm response for ${pkg}`));
          }
        });
      })
      .on("error", reject);
  });
}

/** Read the installed version of a package from its package.json. */
function installedVersion(pkg) {
  try {
    const pkgJson = JSON.parse(
      fs.readFileSync(
        path.join(process.cwd(), "node_modules", pkg, "package.json"),
        "utf8"
      )
    );
    return pkgJson.version ?? "unknown";
  } catch {
    return "not installed";
  }
}

/** Read SEO metadata from the project's layout and page files. */
function collectSeoData() {
  const targets = [
    path.join(process.cwd(), "app", "layout.tsx"),
    path.join(process.cwd(), "app", "page.tsx"),
    path.join(process.cwd(), "lib", "schema.ts"),
  ];
  const snippets = {};
  for (const filePath of targets) {
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, "utf8");
      // Extract export const metadata blocks or schema helper exports
      snippets[path.basename(filePath)] = content.slice(0, 800);
    }
  }
  return snippets;
}

async function run() {
  console.log("🔍 Caramel Digital Studio — Site Audit\n");

  // --- Tailwind version check ---
  let tailwindAudit;
  try {
    const installed = installedVersion("tailwindcss");
    const latest = await fetchLatestVersion("tailwindcss");
    tailwindAudit = { installed, latest, upToDate: installed === latest };
    console.log(`Tailwind CSS: installed=${installed}, latest=${latest}`);
  } catch (err) {
    tailwindAudit = { error: err.message };
    console.warn("⚠️  Could not check Tailwind version:", err.message);
  }

  // --- SEO data collection ---
  const seoData = collectSeoData();
  console.log(`SEO files scanned: ${Object.keys(seoData).join(", ")}`);

  // --- Performance hints (static analysis) ---
  const performanceHints = {
    nextImageUsage: fs.existsSync(path.join(process.cwd(), "app"))
      ? "Check that all <img> tags are replaced with next/image for automatic optimization"
      : "app/ directory not found",
    bundleAnalysis: "Run `pnpm build && pnpm exec next-bundle-analyzer` for details",
    coreWebVitals: "Use Lighthouse CI or PageSpeed Insights for live measurements",
  };

  // --- Build audit payload ---
  const auditPayload = {
    tailwind: tailwindAudit,
    seo: seoData,
    performance: performanceHints,
  };

  console.log("\n📋 Audit payload collected. Sending to LLM...\n");
  console.log("PROMPT:\n", PROMPT);
  console.log("DATA:\n", JSON.stringify(auditPayload, null, 2));

  // When @openclaw/cli is installed, replace the lines above with:
  // const { OpenClaw } = require("@openclaw/cli");
  // const agent = new OpenClaw();
  // const report = await agent.run(PROMPT, auditPayload);
  // console.log(report);
}

run().catch((err) => {
  console.error("Audit failed:", err);
  process.exit(1);
});
