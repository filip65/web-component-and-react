import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/web/my-heading.jsx"),
      },
      output: {
        entryFileNames: "my-heading.js",
        format: "es",
      },
    },
  },
});
