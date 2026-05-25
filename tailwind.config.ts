import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow:       "#f5c52b",
        "yellow-dark":"#e0a91a",
        orange:       "#e87737",
        "orange-dark":"#c85c24",
        "orange-soft":"#fff0e7",
        green:        "#8fa878",
        "green-dark": "#5f744e",
        "green-soft": "#d8e4c9",
        cream:        "#fdf6e3",
        offwhite:     "#f7eed8",
        ink:          "#2b2826",
        body:         "#4a4541",
        "muted-ink":  "#8b8178",
        line:         "#ead9b0",
      },
      fontFamily: {
        display: ["var(--font-display)", "Archivo Black", "sans-serif"],
        body:    ["var(--font-body)", "Inter", "sans-serif"],
        script:  ["var(--font-script)", "Caveat", "cursive"],
      },
      borderRadius: {
        brand:  "24px",
        card:   "28px",
        pill:   "9999px",
      },
      borderWidth: {
        "3": "3px",
      },
    },
  },
  plugins: [],
};
export default config;
