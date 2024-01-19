import fontVariables from "lib/font-variables";
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  // Static metadata docs https://beta.nextjs.org/docs/api-reference/metadata#static-metadata
  title: "Juguetear",
  description:
    "Juguetear es un proyecto solidario, sin fines de lucro, que tiene como objetivo adaptar juguetes para niñes con discapacidades motrices complejas y ofrecerlos en calidad de préstamo, sin costo para las familias.",
  icons: "/favicon.ico",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={fontVariables}>
      <body>{children}</body>
    </html>
  );
}
