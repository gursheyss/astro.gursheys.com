import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte()],
  output: "hybrid",
  adapter: vercel({
    isr: {
      expiration: 60 * 60 * 24,
      exclude: ["/api/now-playing"],
    },
    webAnalytics: {
      enabled: true,
    },
  }),
});
