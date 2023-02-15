import { Meta, StoryObj } from "@storybook/react";
import { Link, Navbar } from "./Navbar";

const exampleLinks: Link[] = [
  { label: "Juguetes", route: "/juguetes" },
  { label: "Colaborar", route: "/colaborar" },
  { label: "Sobre el proyecto", route: "/about" },
  { label: "Documentacion", route: "/documentacion" },
  { label: "Ayuda", route: "/ayuda" },
];

export default {
  title: "Navbar",
  component: Navbar,
  args: {
    links: exampleLinks,
  },
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
} as Meta<typeof Navbar>;

const storyWithPathnameAs = (pathname: string) => ({
  parameters: {
    nextjs: {
      navigation: {
        pathname,
      },
    },
  },
});

export const CurrentRouteIndex: StoryObj<typeof Navbar> =
  storyWithPathnameAs("/");

export const CurrentRouteAbout: StoryObj<typeof Navbar> =
  storyWithPathnameAs("/about");

export const CurrentRouteColaborar: StoryObj<typeof Navbar> =
  storyWithPathnameAs("/colaborar");

export const CurrentRouteDocumentacion: StoryObj<typeof Navbar> =
  storyWithPathnameAs("/documentacion");

export const CurrentRouteAyuda: StoryObj<typeof Navbar> =
  storyWithPathnameAs("/ayuda");
