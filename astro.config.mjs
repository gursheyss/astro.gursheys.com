import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import remarkSmartypants from "remark-smartypants";
import vercel from "@astrojs/vercel/serverless";
import rehypePrettyCode from "rehype-pretty-code";
import theme from "./syntax-theme.json";

import mdx from "@astrojs/mdx";

const prettyCodeOptions = {
  theme,
  onVisitHighlightedLine(node) {
    node?.properties?.className
      ? node.properties.className.push("highlighted")
      : (node.properties.className = ["highlighted"]);
  },
  onVisitHighlightedChars(node) {
    console.log(node);
    node?.properties?.className
      ? node.properties.className.push("highlighted-chars")
      : (node.properties.className = ["highlighted-chars"]);
  },
  tokensMap: {},
};

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte(), mdx()],
  output: "server",
  adapter: vercel({
    isr: {
      expiration: 60 * 60 * 24,
      exclude: ["/api/now-playing"],
    },
    webAnalytics: {
      enabled: true,
    },
  }),
  markdown: {
    syntaxHighlight: false,
    remarkPlugins: [[remarkSmartypants, {}]],
    rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
    shikiConfig: {
      theme,
    },
  },
});
