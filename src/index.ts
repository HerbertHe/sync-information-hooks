import "dotenv/config"
import fs from "fs"
import path from "path"

import { updateNotificationsToDiscord } from "./discord/index"

const checkMsgFile = () => {
    const dir = fs.readdirSync(path.resolve())
    if (!dir.includes("sync.msg.json")) {
        return false
    }

    return path.join(path.resolve(), "msg.json")
}

if (!checkMsgFile()) {
    throw new Error("No msg.json file found!")
} else {
    const msg = JSON.parse(fs.readFileSync(checkMsgFile() as string).toString())
    updateNotificationsToDiscord(msg) // 更新 discord 通知消息
}
