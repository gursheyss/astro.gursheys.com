/** @type {import('tailwindcss').Config} */
const vignetteZIndex = 10;
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        pink: "rgb(253, 207, 243)",
      },
      zIndex: {
        vignette: `${vignetteZIndex}`,
        aboveVignette: `${vignetteZIndex + 1}`,
      },
    },
  },
  plugins: [],
};
