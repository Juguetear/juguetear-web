import { Meta, StoryObj } from "@storybook/react";
import { Footer, Link } from "./Footer";

const exampleLinks: Link[] = [
  { label: "Home", route: "/" },
  { label: "Juguetes disponibles", route: "/juguetes" },
  { label: "Colaborar", route: "/colaborar" },
  { label: "Sobre el proyecto", route: "/about" },
  { label: "Ayuda", route: "/ayuda" },
  { label: "Accesibilidad", route: "/accesibilidad" },
];

export default {
  title: "Footer",
  component: Footer,
  args: {
    links: exampleLinks,
  },
  parameters: {
    nextjs: {
      appDirectory: true,
    },
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
