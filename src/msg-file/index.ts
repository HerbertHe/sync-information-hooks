import fs from "fs"
import path from "path"

export interface IMsgJSON {
    notifications?: string[]
    hash?: string
}

export const checkMsgFile = () => {
    const dir = fs.readdirSync(path.resolve())
    if (!dir.includes("sync.msg.json")) {
        return false
    }

    return path.join(path.resolve(), "sync.msg.json")
}

export const readMsgFile = () => {
    if (!checkMsgFile()) {
        throw new Error("No sync.msg.json file found!")
    } else {
        return JSON.parse(
            fs.readFileSync(checkMsgFile() as string).toString()
        ) as IMsgJSON
    }
}

export const updateMsgFile = (msg: IMsgJSON) => {
    const msgBefore = readMsgFile()
    const msgAfter = { ...msgBefore, ...msg }
    fs.writeFileSync(checkMsgFile() as string, JSON.stringify(msgAfter, null, 4))
}
