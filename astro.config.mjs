import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import vercel from "@astrojs/vercel/serverless";
import mdx from "@astrojs/mdx";
import expressiveCode, { ExpressiveCodeTheme } from "astro-expressive-code";
import syntaxTheme from "./syntax-theme.json";

const myTheme = ExpressiveCodeTheme.fromJSONString(JSON.stringify(syntaxTheme));

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    svelte(),
    expressiveCode({
      themes: [myTheme],
      styleOverrides: {
        codeFontFamily: "Geist Mono",
      },
    }),
    mdx(),
  ],
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
});
