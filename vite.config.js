import { defineConfig } from "vite";

export default defineConfig({
  base: "/portfolio-vite/",
  root: "src",
  build: {
    outDir: "../public",
  },
});
