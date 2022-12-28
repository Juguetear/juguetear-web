import { Inter, Outfit } from "@next/font/google";
import type { AppProps } from "next/app";
import "../styles/globals.css";

const inter = Inter({
  variable: "--font-inter",
  weight: "400",
});

const outfit = Outfit({
  variable: "--font-outfit",
  weight: "800",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.variable} ${outfit.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
