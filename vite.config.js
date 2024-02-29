import { defineConfig } from "vite";

export default defineConfig({
  // root: "./src",
  build: {
    rollupOptions: {
      output: {
        entryFileNames: "bundle.js",
      },
    },
  },
  server: {
    port: 4202,
  },
});
