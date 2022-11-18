import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: "src/index.ts",
      output: {
        entryFileNames: "bundled.js",
        dir: "."
      }
    }
  }
})
