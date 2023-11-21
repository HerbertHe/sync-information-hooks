import fs from "fs"
import path from "path"
import { execSync } from "child_process"

const ifGit = () => {
    return fs.existsSync(path.join(path.resolve(), ".git"))
}

export const getGitLogs = (msg: any) => {
    if (!ifGit()) return false

    if (!!msg?.hash) {
        const hash = msg.hash
        if (typeof hash !== "string" || hash.length !== 40) {
            throw new Error("Invalid Git Hash!")
        } else {
            return execSync(`git log --graph -- hash ${hash}`).toString()
        }
    }

    return execSync(`git log --graph`).toString()
}