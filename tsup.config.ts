import { defineConfig } from "tsup"

export const tsup = defineConfig({
    entry: ["src/index.ts", "src/synci.ts"],
    format: "esm",
    outDir: "dist",
    clean: true
})