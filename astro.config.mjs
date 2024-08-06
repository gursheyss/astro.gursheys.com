import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";
import expressiveCode from "astro-expressive-code";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), expressiveCode(), mdx()],
  output: "hybrid",
  adapter: vercel(),
  experimental: {
    serverIslands: true,
  },
});
