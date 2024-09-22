import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        backgroundSecondary: "var(--bg-secondary)",
        colorPrimary: "var(--color-primary)",
        colorSecondary: "var(--color-secondary)",
        colorTertiary: "var(--color-tertiary)",
        colorBlue: "var(--color-blue-)",
        borderColor: "var(--border-color)"
      },
      fontSize: {
        fontBase: "var(--font-size-base)",
        fontSmall: "var(--font-size-small)",
        fontXSmall: "var(--font-size-xsmall)",
      },
    },
  },
  plugins: [],
};
export default config;
