const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} \*/
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "blue-light": "#E9F7F9",
      turquoise: "#23B1BF",
      orange: "#D2451A",
      blue: "#00245A",
      yellow: "#FFFCF0",
      white: "#FFFFFF",
      gray: "#BDBDBD",
      "gray-light": "#F2F2F2",
      "gray-dark": "#4A4A4A",
    },
    borderRadius: {
      none: "0",
      DEFAULT: "0.25rem",
    },
    fontSize: {
      sm: ["1rem", "1.4"],
      base: ["1.188rem", "1.4"],
      lg: ["1.25rem", "1.4"],
      xl: ["1.5rem", "1.4"],
      "2xl": ["1.75rem", "1.4"],
      "3xl": ["2.125rem", "1.4"],
      "4xl": ["2.25rem", "1.4"],
    },
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", ...fontFamily.sans],
        outfit: ["var(--font-outfit)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
