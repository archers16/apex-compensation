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
        coral: "#FF6B6B",
        magenta: "#E855D4",
        violet: "#D946EF",
        navy: "#0F1B4C",
        purple: "#2D1B69",
        slate: "#64748B",
        cloud: "#F8F9FB",
      },
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif"],
      },
      backgroundImage: {
        "apex-gradient": "linear-gradient(135deg, #FF6B6B 0%, #D946EF 100%)",
        "dark-gradient": "linear-gradient(135deg, #2D1B69 0%, #0F1B4C 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
