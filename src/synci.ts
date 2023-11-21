import "dotenv/config"

import { updateNotificationsToDiscord, readMsgFile } from "."

// TODO 写命令行工具

updateNotificationsToDiscord(readMsgFile()) // 更新 discord 通知消息
