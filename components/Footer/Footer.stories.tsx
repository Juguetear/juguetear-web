import type { Meta, StoryObj } from "@storybook/react";
import type { FooterLink } from "types/layout";
import { Footer } from "./Footer";

const exampleLinks: FooterLink[] = [
  { name: "Home", url: "/" },
  { name: "Juguetes disponibles", url: "/juguetes" },
  { name: "Colaborar", url: "/colaborar" },
  { name: "Sobre el proyecto", url: "/about" },
  { name: "Ayuda", url: "/ayuda" },
  { name: "Accesibilidad", url: "/accesibilidad" },
];

export default {
  title: "Layout/Footer",
  component: Footer,
  args: {
    links: exampleLinks,
  },
} as Meta<typeof Footer>;

const storyWithPathnameAs = (pathname: string) => ({
  parameters: {
    nextjs: {
      navigation: {
        pathname,
      },
    },
  },
});

export const CurrentRouteIndex: StoryObj<typeof Footer> =
  storyWithPathnameAs("/");

export const CurrentRouteJuguetes: StoryObj<typeof Footer> =
  storyWithPathnameAs("/juguetes");

export const CurrentRouteAbout: StoryObj<typeof Footer> =
  storyWithPathnameAs("/about");

export const CurrentRouteColaborar: StoryObj<typeof Footer> =
  storyWithPathnameAs("/colaborar");

export const CurrentRouteAccesibilidad: StoryObj<typeof Footer> =
  storyWithPathnameAs("/accesibilidad");

export const CurrentRouteAyuda: StoryObj<typeof Footer> =
  storyWithPathnameAs("/ayuda");
