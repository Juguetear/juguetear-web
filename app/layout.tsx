import fontVariables from "lib/font-variables";
import "./globals.css";

export const metadata = {
  title: "Juguetear",
  viewport: "width=device-width, initial-scale=1",
  description:
    "Juguetear es un proyecto solidario, sin fines de lucro, que tiene como objetivo adaptar juguetes para niñes con discapacidades motrices complejas y ofrecerlos en calidad de préstamo, sin costo para las familias.",
  icons: "/favicon.ico",
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
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
    </html>
  );
}
