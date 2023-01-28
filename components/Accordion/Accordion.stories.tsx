import { Meta, StoryFn } from "@storybook/react";

import { Accordion } from "./Accordion";

export default {
  title: "Accordion",
  component: Accordion,
} as Meta<typeof Accordion>;

export const Normal = {
  args: {
    text: "¿Hay que pagar para usar los juguetes?",
    content: "No, el prestamo es sin costo alguno.",
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
    text: "¿Hay que pagar para usar los juguetes?",
    content: "No, el prestamo es sin costo alguno.",
  },
  "Accordion 2": {
    text: "¿Envían a otros lugares fuera de La Plata?",
    content: "No, el prestamo es solo en La Plata.",
  },
};
