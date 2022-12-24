import { Inter, Outfit } from "@next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  weight: "400",
});

const outfit = Outfit({
  variable: "--font-outfit",
  weight: "800",
});

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${outfit.variable}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
    </html>
  );
}
