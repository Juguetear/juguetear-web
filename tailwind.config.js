/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      celeste: "#E9F7F9",
      "verde-agua": "#23B1BF",
      naranja: "#D2451A",
      azul: "#00245A",
      amarillo: "#FFFCF0",
      blanco: "#FFFFFF",
      "gris-medio": "#BDBDBD",
      "gris-claro": "#F2F2F2",
      "gris-oscuro": "#4A4A4A",
    },
    borderRadius: {
      none: "0",
      DEFAULT: "0.25rem",
    },
    extend: {
      fontFamily: {
        inter: ["Inter", ...fontFamily.sans],
        outfit: ["Outfit", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
