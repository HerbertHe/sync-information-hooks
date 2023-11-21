import fs from "fs"
import path from "path"

import { getGitLogs } from "./git"

export const checkMsgFile = () => {
    const dir = fs.readdirSync(path.resolve())
    if (!dir.includes("sync.msg.json")) {
        return false
    }

    return path.join(path.resolve(), "sync.msg.json")
}

if (!checkMsgFile()) {
    throw new Error("No sync.msg.json file found!")
} else {
    const msg = JSON.parse(fs.readFileSync(checkMsgFile() as string).toString())
    console.log(getGitLogs(msg))
}

export * from "./discord"
export * from "./git"