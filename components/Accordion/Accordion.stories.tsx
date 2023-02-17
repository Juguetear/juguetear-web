import { Meta, StoryObj } from "@storybook/react";

import { Accordion } from "./Accordion";

interface ArgsProps {
  "Accordion 1": AccordionProps;
  "Accordion 2": AccordionProps;
}

type AccordionProps = {
  title: string;
  children: JSX.Element;
};

type Story = StoryObj<typeof Accordion>;

export default {
  title: "Accordion",
  component: Accordion,
} as Meta<typeof Accordion>;

export const Normal: Story = {
  args: {
    title: "¿Hay que pagar para usar los juguetes?",
    children: <p>No, el prestamo es sin costo alguno.</p>,
  },
};

export const Conjunto = {
  render: (args: ArgsProps) => {
    return (
      <>
        <Accordion {...args["Accordion 1"]} />
        <Accordion {...args["Accordion 2"]} />
      </>
    );
  },

  args: {
    "Accordion 1": {
      title: "¿Hay que pagar para usar los juguetes?",
      children: <p>No, el prestamo es sin costo alguno.</p>,
    },
    "Accordion 2": {
      title: "¿Envían a otros lugares fuera de La Plata?",
      children: <p>No, el prestamo es solo en La Plata.</p>,
    },
  },
};
