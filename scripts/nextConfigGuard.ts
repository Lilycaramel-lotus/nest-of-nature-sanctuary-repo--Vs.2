import fs from "fs"
import path from "path"

const filePath = path.join(process.cwd(), "next.config.js")

if (!fs.existsSync(filePath)) {
  process.exit(0)
}

const content = fs.readFileSync(filePath, "utf-8")

const forbidden = [
  "experimental.ppr",
  "ppr:",
  "experimental:"
]

const violations = forbidden.filter((rule) => content.includes(rule))

if (violations.length > 0) {
  console.error("\n❌ NEXT CONFIG VIOLATION\n")
  console.error("Forbidden config detected in next.config.js:\n")
  violations.forEach(v => console.error(`- ${v}`))
  console.error("\nRemove experimental config. Build blocked.\n")
  process.exit(1)
}

console.log("✅ next.config.js clean")
