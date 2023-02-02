import { Meta, StoryFn } from "@storybook/react";

import { Accordion } from "./Accordion";

export default {
  title: "Accordion",
  component: Accordion,
} as Meta<typeof Accordion>;

export const Normal = {
  args: {
    title: "¿Hay que pagar para usar los juguetes?",
    children: <p>No, el prestamo es sin costo alguno.</p>,
  },
};

const TemplateSet: StoryFn = (args) => {
  return (
    <>
      <Accordion {...args["Accordion 1"]} />
      <Accordion {...args["Accordion 2"]} />
    </>
  );
};

export const Conjunto = TemplateSet.bind({});

Conjunto.args = {
  "Accordion 1": {
    title: "¿Hay que pagar para usar los juguetes?",
    children: <p>No, el prestamo es sin costo alguno.</p>,
  },
  "Accordion 2": {
    title: "¿Envían a otros lugares fuera de La Plata?",
    children: <p>No, el prestamo es solo en La Plata.</p>,
  },
};
