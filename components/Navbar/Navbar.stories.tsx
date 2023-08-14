import type { Meta, StoryObj } from "@storybook/react";
import type { NavbarLink } from "types/layout";
import { Navbar } from "./Navbar";

const exampleLinks: NavbarLink[] = [
  { name: "Juguetes", url: "/juguetes" },
  { name: "Colaborar", url: "/colaborar" },
  { name: "Sobre el proyecto", url: "/about" },
  { name: "Documentacion", url: "/documentacion" },
  { name: "Ayuda", url: "/ayuda" },
];

export default {
  title: "Layout/Navbar",
  component: Navbar,
  args: {
    links: exampleLinks,
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

export const CurrentRouteJuguetes: StoryObj<typeof Navbar> =
  storyWithPathnameAs("/juguetes");

export const CurrentRouteAbout: StoryObj<typeof Navbar> =
  storyWithPathnameAs("/about");

export const CurrentRouteColaborar: StoryObj<typeof Navbar> =
  storyWithPathnameAs("/colaborar");

export const CurrentRouteDocumentacion: StoryObj<typeof Navbar> =
  storyWithPathnameAs("/documentacion");

export const CurrentRouteAyuda: StoryObj<typeof Navbar> =
  storyWithPathnameAs("/ayuda");
