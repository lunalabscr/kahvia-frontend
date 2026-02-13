import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // High-priority actions (Buttons, active links)
        primary: colors.indigo,

        // Secondary actions, accents, or subtle backgrounds
        secondary: colors.slate,

        // Semantic colors for feedback
        success: colors.emerald,
        error: colors.rose,
        warning: colors.amber,
        info: colors.sky,

        // Neutral grays for text and borders
        neutral: colors.gray,
      },
    },
  },
  plugins: [typography],
};

export default config;
