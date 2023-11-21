import { execSync } from "child_process"

export const getBranch = execSync("git branch --show-current").toString()
