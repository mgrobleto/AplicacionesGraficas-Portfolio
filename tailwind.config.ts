import type { Config } from "tailwindcss";
import {nextui} from '@nextui-org/react';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    nextui({
    themes:{
      "pink-dark":{
        extend: "dark",
        colors: {
          background: "#FFFFF",
          foreground: "#99183d",
          primary:{
            50: "#fef2f3",
            100: "#fee5e7",
            200: "#fccfd5",
            300: "#f9a8b3",
            400: "#f5778a",
            500: "#ec4765",
            600: "#d9254f",
            700: "#b71942",
            800: "#99183d",
            900: "#83183a",
            foreground: "#49081b",
            DEFAULT: "#49081b"
          },
          focus: "#d9254f"
        }
      }
    }
  })],
};
export default config;
