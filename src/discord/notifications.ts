import fetch from "node-fetch"

export const updateNotificationsToDiscord = (msg: any) => {
    const hook = process.env.DISCORD_NOTIFICATIONS_WEBHOOK_URL

    if (!hook) return

    const noti = msg?.notifications

    if (!noti) return

    if (!Array.isArray(noti)) {
        throw new Error("Type of msg.notifications must be array!")
    }

    const nf = noti.filter((n) => typeof n === "string")

    if (nf.length === 0) return

    nf.forEach((n) => {
        const payload = JSON.stringify({
            content: n,
        })

        fetch(hook, {
            method: "POST",
            body: payload,
            headers: {
                "Content-Type": "application/json",
            },
        }).then((res) => {
            console.log(`Discord notification:`)
            console.log(`Content: ${n}`)
            console.log(`Status: ${res.status}\n`)
        })
    })
}
