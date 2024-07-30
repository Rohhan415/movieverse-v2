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
        base: { white: "#ffffff", black: "#0f0f0f", gray: "#1c1e22" },
        shade: { 100: "#cccaca", 200: "#a8a8a8", 300: "#737373" },
        accent: {
          100: "#802d00",
          200: "#993500",
          300: "#b33e00",
          400: "#cc4700",
          500: "#e65000",
          600: "#ff5900",
        },
      },
    },
  },
  plugins: [],
};
export default config;
