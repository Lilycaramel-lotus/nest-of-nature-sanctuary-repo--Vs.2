import fs from "fs"
import path from "path"

const ROOT = process.cwd()

function shouldIgnore(file: string) {
  return (
    file.includes("node_modules") ||
    file.includes(".pnpm-store") ||
    file.includes(".git") ||
    file.includes(".next") ||
    file.includes("README.md") ||
    file.includes("scripts/") ||
    file.includes("next.config") ||
    file.includes("package.json") ||
    file.includes("package-lock.json") ||
    file.includes("tsconfig") ||
    file.includes(".vercel") ||
    file.includes(".manus-logs") ||
    file.includes(".openclaw") ||
    file.includes("agents/") ||
    file.includes("next-env.d.ts") ||
    file.includes("lib/schema.ts") ||
    file.includes("components/WhatsAppButton.tsx") ||
    file.includes("app/robots.ts") ||
    file.includes("app/sitemap.ts") ||
    file.includes("app/layout.tsx") ||
    file.includes("app/page.tsx") ||
    file.includes("app/[slug]/page.tsx") ||
    file.endsWith(".md") ||
    file.endsWith(".log") ||
    file.endsWith(".json") ||
    file.endsWith(".d.ts")
  )
}

function walk(dir: string, files: string[] = []) {
  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry)

    if (shouldIgnore(full)) continue

    if (fs.statSync(full).isDirectory()) {
      walk(full, files)
    } else {
      files.push(full)
    }
  }
  return files
}

function run() {
  const files = walk(ROOT)
  const violations: string[] = []

  for (const file of files) {
    const content = fs.readFileSync(file, "utf-8")

    const hasUrl =
      content.includes("http://") || content.includes("https://")

    const hasEnv =
      content.includes("process.env.NEXT_PUBLIC_")

    if (hasUrl && !file.includes("config.ts")) {
      violations.push(`URL violation: ${file}`)
    }

    if (hasEnv && !file.includes("config.ts")) {
      violations.push(`ENV violation: ${file}`)
    }
  }

  if (violations.length > 0) {
    console.error("\n❌ AUDIT FAILED\n")
    violations.forEach(v => console.error(v))
    process.exit(1)
  }

  console.log("✅ AUDIT PASSED")
}

run()
