import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          100: "rgba(185, 177, 144, 0.1)",
          200: "rgba(185, 177, 144, 0.2)",
          300: "rgba(185, 177, 144, 0.3)",
          400: "rgba(185, 177, 144, 0.4)",
          500: "rgba(185, 177, 144, 0.5)",
          600: "rgba(185, 177, 144, 0.6)",
          700: "rgba(185, 177, 144, 0.7)",
          800: "rgba(185, 177, 144, 0.8)",
          900: "rgba(185, 177, 144, 0.9)",
          DEFAULT: "rgba(185, 177, 144)",
        },
        white: {
          100: "rgba(255, 255, 255, 0.1)",
          200: "rgba(255, 255, 255, 0.2)",
          300: "rgba(255, 255, 255, 0.3)",
          400: "rgba(255, 255, 255, 0.4)",
          500: "rgba(255, 255, 255, 0.5)",
          600: "rgba(255, 255, 255, 0.6)",
          700: "rgba(255, 255, 255, 0.7)",
          800: "rgba(255, 255, 255, 0.8)",
          900: "rgba(255, 255, 255, 0.9)",
          DEFAULT: "rgba(255, 255, 255)",
        },
        success: {
          100: "rgba(0, 128, 0, 0.1)",
          200: "rgba(0, 128, 0, 0.2)",
          300: "rgba(0, 128, 0, 0.3)",
          400: "rgba(0, 128, 0, 0.4)",
          500: "rgba(0, 128, 0, 0.5)",
          600: "rgba(0, 128, 0, 0.6)",
          700: "rgba(0, 128, 0, 0.7)",
          800: "rgba(0, 128, 0, 0.8)",
          900: "rgba(0, 128, 0, 0.9)",
          DEFAULT: "rgba(0, 128, 0)",
        },
        danger: {
          100: "rgba(255, 99, 71, 0.1)",
          200: "rgba(255, 99, 71, 0.2)",
          300: "rgba(255, 99, 71, 0.3)",
          400: "rgba(255, 99, 71, 0.4)",
          500: "rgba(255, 99, 71, 0.5)",
          600: "rgba(255, 99, 71, 0.6)",
          700: "rgba(255, 99, 71, 0.7)",
          800: "rgba(255, 99, 71, 0.8)",
          900: "rgba(255, 99, 71, 0.9)",
          DEFAULT: "rgba(255, 99, 71)",
        },
      },
    },
    keyframes: {
      scale: {
        from: {
          scale: "0.5",
        },
        to: {
          scale: "1",
        },
      },
    },
    animation: {
      scale: "scale 300ms ease-in-out",
    },
  },
  plugins: [],
};
export default config;
