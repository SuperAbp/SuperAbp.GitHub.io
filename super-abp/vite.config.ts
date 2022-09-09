import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import md from "./plugin/md";
import docs from "./plugin/docs";
import { resolveComponent } from "vue";
import Markdown from "vite-plugin-md";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    docs(),
    md(),
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
  ],
  resolve: {
    alias: {
      "@": resolveComponent("./src"),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
});
