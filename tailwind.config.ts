import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // High-priority actions (Buttons, active links)
        primary: {
          DEFAULT: "#b82324",
          dark: "#791216",
        },

        // Secondary actions, accents, or subtle backgrounds
        secondary: {
          DEFAULT: "#791216",
        },

        background: "#f6e7d2",

        // Semantic colors for feedback
        success: colors.emerald,
        error: colors.rose,
        warning: colors.amber,
        info: colors.sky,

        // Neutral grays for text and borders
        neutral: colors.gray,
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "sans-serif"],
        heading: ["var(--font-titan)", "sans-serif"],
      },
    },
  },
  plugins: [typography],
};

export default config;
