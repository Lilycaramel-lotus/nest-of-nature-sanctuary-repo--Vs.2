# Caramel Digital Studio — Master Agent Instructions

## Overview

This document defines the master agent configuration for Caramel Digital Studio v2.
Agents are powered by [Ollama](https://ollama.com/) (model: `gemma2:2b`) via the
[OpenClaw](https://github.com/openclaw) CLI and can be invoked locally or wired into
Slack via the OpenClaw Slack adapter.

---

## Agent Roles

### 1. Site Audit Agent (`agents/audit-site.js`)

**Purpose:** Audit the live site and codebase for quality, performance, and freshness.

**Tasks:**
- **Tailwind updates** — Check the installed `tailwindcss` version against the latest
  release and surface breaking-change notes.
- **SEO** — Validate `<title>`, `<meta description>`, Open Graph tags, canonical URLs,
  and structured data (schema.org) across all pages.
- **Performance** — Run Lighthouse-style checks: Core Web Vitals (LCP, FID/INP, CLS),
  image optimization, font loading, and bundle size.

**Trigger:** Run manually with `pnpm run audit` or schedule via a GitHub Actions cron.

---

### 2. Content Writer Agent (`agents/content-writer.js`)

**Purpose:** Draft long-form thought leadership articles for the studio blog.

**Sources:**
- **PubMed** — Latest research on digital health, design cognition, or UX psychology.
- **GitHub trending** — Popular open-source projects relevant to web development,
  AI tooling, and design systems.

**Output:** Markdown drafts saved to `content/drafts/` with front-matter metadata
(title, date, tags, source URLs).

**Trigger:** Invoke via `pnpm run content` or through the Slack `/content` slash command.

---

### 3. Automations

#### Calendly Quote Bot
- Listens for Calendly webhook events (`invitee.created`).
- Fetches the meeting type and duration, then generates a personalised project quote
  using the LLM.
- Posts the quote to the client's email and logs it to a Google Sheet or Notion page.

#### Chatbot
- Embeds on the studio website as a floating widget.
- Answers questions about services, pricing, turnaround times, and portfolio.
- Escalates to WhatsApp (`+27642205618`) when the query requires human follow-up.

---

## Ollama / Gemma Configuration

```json
// .openclaw/config.json
{
  "provider": "ollama",
  "model": "gemma2:2b",
  "tools": ["web-search", "fetch", "repo-audit"]
}
```

**Running Ollama locally:**

```bash
# Install Ollama (macOS / Linux)
curl -fsSL https://ollama.com/install.sh | sh

# Pull the default model
ollama pull gemma2:2b

# Start the Ollama server (runs on http://localhost:11434 by default)
ollama serve
```

---

## OpenClaw CLI Setup

```bash
# Install the CLI (requires Node ≥ 18)
pnpm add -D @openclaw/cli

# Initialise (reads .openclaw/config.json automatically)
pnpm exec openclaw init

# Run an agent
pnpm exec openclaw run agents/audit-site.js
pnpm exec openclaw run agents/content-writer.js
```

---

## Slack Agent Integration

1. Create a Slack App and add the **Bot Token Scopes**: `chat:write`, `commands`,
   `app_mentions:read`.
2. Set the environment variables:
   ```
   SLACK_BOT_TOKEN=xoxb-...
   SLACK_SIGNING_SECRET=...
   OLLAMA_BASE_URL=http://localhost:11434   # or your remote Ollama host
   ```
3. Configure the OpenClaw Slack adapter in `.openclaw/config.json` under the `"slack"`
   key (see config file).
4. Deploy with `pnpm exec openclaw slack start`.

---

## Copilot Usage Notes

- Reference this file as context when asking Copilot to extend or debug any agent.
- Agents follow the project's CommonJS module format (`.js` files, `require` / `module.exports`).
- All agent scripts should use `async/await` and handle errors with `try/catch`.
- Keep LLM prompts in clearly labelled `const PROMPT = \`...\`` constants at the top of
  each agent file for easy editing.
