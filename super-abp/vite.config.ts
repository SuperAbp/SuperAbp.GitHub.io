import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolveComponent } from "vue";
import Markdown from "vite-plugin-md";
import MarkdownItAnchor from "markdown-it-anchor";
import MarkdownItPrism from "markdown-it-prism";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown({
      wrapperClasses: "markdown",
      markdownItOptions: {
        // html: true,
        // linkify: true,
        // typographer: true,
        html: false,
        xhtmlOut: true,
        typographer: true,
      },
      markdownItSetup(md) {
        // add anchor links to your H[x] tags
        md.use(MarkdownItAnchor, {
          permalink: true,
          permalinkSymbol: "#",
        });
        // add code syntax highlighting with Prism
        md.use(MarkdownItPrism);
      },
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
