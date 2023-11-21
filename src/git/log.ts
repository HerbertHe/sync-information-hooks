import fs from "fs"
import path from "path"
import { execSync } from "child_process"

import type { IMsgJSON } from "../msg-file"

const ifGit = () => {
    return fs.existsSync(path.join(path.resolve(), ".git"))
}

// TODO
export const getGitLogs = (msg: IMsgJSON) => {
    if (!ifGit()) return false

    if (!!msg?.hash) {
        const hash = msg.hash
        if (typeof hash !== "string" || hash.length !== 40) {
            throw new Error("Invalid Git Hash!")
        } else {
            const logs = execSync(`git log --graph`).toString()
            const targetHashRegExp = new RegExp(`\\* commit ${hash}[\\s\\S]*`)

            return logs.replace(targetHashRegExp, "")
        }
    }

    return execSync(`git log --graph`).toString()
}
