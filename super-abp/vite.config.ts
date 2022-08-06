import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolveComponent } from "vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
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
