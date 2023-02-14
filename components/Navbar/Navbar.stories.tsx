import { Meta, StoryObj } from "@storybook/react";
import { Navbar, NavbarItem } from "./Navbar";

export default {
  title: "Navbar",
  component: Navbar,
  subcomponents: { NavbarItem },
} as Meta<typeof Navbar>;

const NavbarUsageExample = ({ currentRoute }: { currentRoute: string }) => {
  const exampleLinks: { route: string; label: string }[] = [
    { label: "Juguetes", route: "juguetes" },
    { label: "Colaborar", route: "colaborar" },
    { label: "Sobre el proyecto", route: "about" },
    { label: "Documentacion", route: "documentacion" },
    { label: "Ayuda", route: "ayuda" },
  ];
  return (
    <Navbar isCurrentIndex={currentRoute === "/"}>
      {exampleLinks.map((link) => (
        <NavbarItem
          route={link.route}
          isCurrent={link.route === currentRoute}
          key={link.route}
        >
          {link.label}
        </NavbarItem>
      ))}
    </Navbar>
  );
};

export const CurrentRouteIndex: StoryObj<typeof Navbar> = {
  render: () => <NavbarUsageExample currentRoute="/" />,
};

export const CurrentRouteJuguetes: StoryObj<typeof Navbar> = {
  render: () => <NavbarUsageExample currentRoute="juguetes" />,
};

export const CurrentRouteColaborar: StoryObj<typeof Navbar> = {
  render: () => <NavbarUsageExample currentRoute="colaborar" />,
};

export const CurrentRouteAbout: StoryObj<typeof Navbar> = {
  render: () => <NavbarUsageExample currentRoute="about" />,
};

export const CurrentRouteDocumentacion: StoryObj<typeof Navbar> = {
  render: () => <NavbarUsageExample currentRoute="documentacion" />,
};

export const CurrentRouteAyuda: StoryObj<typeof Navbar> = {
  render: () => <NavbarUsageExample currentRoute="ayuda" />,
};
