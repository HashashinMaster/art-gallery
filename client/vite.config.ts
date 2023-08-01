import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
import { join } from "path";
dotenv.config({ path: join(__dirname, "..", ".env") });

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: process.env.HOST,
      },
      "/storage": {
        target: process.env.HOST,
      },
    },
  },
  build: {
    outDir: "../dist/public",
  },
});
