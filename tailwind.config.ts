import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      typography: () => ({
        DEFAULT: {
          css: {
            pre: {
              backgroundColor: "transparent",
              padding: "0",
            },
            code: {
              backgroundColor: "transparent",
              padding: "0",
              color: "inherit",
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
} satisfies Config;
