import { spawnSync } from "child_process"

const result = spawnSync("node", ["agents/audit-site.js"], {
  stdio: "inherit"
})

process.exit(result.status ?? 1)
