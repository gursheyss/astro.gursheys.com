import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Jetbrains Mono", ...defaultTheme.fontFamily.mono],
        geistMono: ["Geist Mono", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        pink: "rgb(253, 207, 243)",
      },
    },
  },
  plugins: [],
};
