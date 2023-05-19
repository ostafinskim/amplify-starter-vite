import { defineConfig } from "vite"
import path from "path-browserify"

export default defineConfig({
  resolve: {
    alias: {
      path: "path-browserify",
    },
  },
})