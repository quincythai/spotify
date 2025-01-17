import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#264653",
        "persian-green": "#2A9D8F",
        saffron: "#E9C46A",
        "sandy-brown": "#F4A261",
        "burnt-sienna": "#E76F51",

        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        fadeInScale: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "fade-in-scale": "fadeInScale 1.5s ease-out forwards",
      },
    },
  },
  plugins: [],
} satisfies Config;
