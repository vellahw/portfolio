import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { readFileSync } from 'node:fs'

export default defineConfig({
  base: "/",
  publicDir: "src/assets/favicon",
  plugins: [
    tailwindcss(),
    react(),
    {
      name: "og-card",
      generateBundle() {
        this.emitFile({ type: "asset", fileName: "ogCard.png", source: readFileSync(new URL("./src/assets/ogCard.png", import.meta.url)) })
      },
    },
  ],
  build: { outDir: "dist", emptyOutDir: true },
})
