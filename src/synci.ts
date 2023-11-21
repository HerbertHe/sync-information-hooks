import "dotenv/config"
import fs from "fs"
import { checkMsgFile } from "."
import { updateNotificationsToDiscord } from "./discord/index"

if (!checkMsgFile()) {
    throw new Error("No sync.msg.json file found!")
} else {
    const msg = JSON.parse(fs.readFileSync(checkMsgFile() as string).toString())
    updateNotificationsToDiscord(msg) // 更新 discord 通知消息
}
