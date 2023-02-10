import { Inter, Outfit } from "@next/font/google";

const inter = Inter({
  variable: "--font-inter",
  weight: [
    "400", // Regular
  ],
});

const outfit = Outfit({
  variable: "--font-outfit",
  weight: [
    "500", // Medium
    "800", // Extrabold
  ],
});

const fontVariables = `${inter.variable} ${outfit.variable}`;

export default fontVariables;
