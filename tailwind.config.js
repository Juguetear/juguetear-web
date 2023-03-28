// eslint-disable-next-line @typescript-eslint/no-var-requires
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
      darkblue: "#00487C",
      yellow: "#FFFCF0",
      white: "#FFFFFF",
      black: "#000000",
      gray: "#BDBDBD",
      "gray-light": "#F2F2F2",
      "gray-medium": "#D9D9D9",
      "gray-dark": "#4A4A4A",
      transparent: "transparent",
      green: "#005C62",
      red: "#E53559",
    },
    // TODO: #253 Remover propiedades `borderRadius` y `borderWidth` la config de Tailwind.
    borderRadius: {
      none: "0",
      DEFAULT: "0.25rem",
      full: "9999px",
    },
    borderWidth: {
      DEFAULT: "0.5px",
    },
    fontSize: {
      /* 16px */ sm: ["1rem", "1.4"],
      /* 19px */ base: ["1.1875rem", "1.4"],
      /* 20px */ lg: ["1.25rem", "1.4"],
      /* 24px */ xl: ["1.5rem", "1.4"],
      /* 28px */ "2xl": ["1.75rem", "1.4"],
      /* 34px */ "3xl": ["2.125rem", "1.4"],
      /* 36px */ "4xl": ["2.25rem", "1.4"],
    },
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", ...fontFamily.sans],
        outfit: ["var(--font-outfit)", ...fontFamily.sans],
      },
      boxShadow: {
        "2md": "0px 0px 5px 5px #066CFF",
        md: "0px 0px 4px 4px #066CFF",
        "1md": "0px 0px 4px 4px #066CFF",
      },
    },
  },
  plugins: [],
};
