import { Inter, Outfit } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  weight: [
    "400", // Regular
    "500", // Medium
    "700", // Bold
  ],
});

const outfit = Outfit({
  variable: "--font-outfit",
  weight: [
    "400", // Regular
    "500", // Medium
    "600", // Semibold
    "700", // Bold
    "800", // Extrabold
  ],
});

const fontVariables = `${inter.variable} ${outfit.variable}`;

export default fontVariables;
