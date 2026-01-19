import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#C5A059",
        "gold-light": "#E8DCC4",
        "bg-black": "#000000",
        "bg-dark": "#1A1A1A",
        "bg-white": "#FFFFFF",
        "text-primary": "#1A1A1A",
        "text-secondary": "#4A4A4A",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-montserrat)", "sans-serif"],
      },
      borderRadius: {
        base: "0px", // Cantos retos = seriedade e modernidade
      },
      boxShadow: {
        "gold-glow": "0 4px 14px 0 rgba(197, 160, 89, 0.39)",
      },
    },
  },
  plugins: [],
};

export default config;
