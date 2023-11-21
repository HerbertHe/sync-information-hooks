import { execSync } from "child_process"

// TODO
export const getLatestHash = () => {
    const hash = execSync("git log").toString().match(/commit ([a-z0-9]{40})/)

    console.log(hash)
}
