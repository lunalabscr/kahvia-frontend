import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // High-priority actions (Buttons, active links)
        // TIP: To change the primary color, replace 'colors.indigo' with another Tailwind color (e.g., colors.blue)
        // or a custom hex code (e.g., '#4f46e5' or { 500: '#4f46e5', 600: '#4338ca' }).
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
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        roboto: ["var(--font-roboto)", "sans-serif"],
        doto: ["var(--font-doto)", "sans-serif"],
      },
    },
  },
  plugins: [typography],
};

export default config;
