import { Inter, Outfit } from "@next/font/google";
import "../app/globals.css";

import { RouterContext } from "next/dist/shared/lib/router-context";

const inter = Inter({
  variable: "--font-inter",
  weight: "400", // Regular
});

const outfit = Outfit({
  variable: "--font-outfit",
  weight: ["500", "800"], // Medium, Extra bold
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};

export const decorators = [
  (Story) => (
    <div className={`${inter.variable} ${outfit.variable}`}>
      <Story />
    </div>
  ),
];
