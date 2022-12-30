import { ComponentMeta, ComponentStory } from "@storybook/react";

import { State } from "./State";

export default {
  title: "State",
  component: State,
} as ComponentMeta<typeof State>;

const Template: ComponentStory<typeof State> = (args) => <State {...args} />;

export const Disponible = Template.bind({});

Disponible.args = {
  available: true,
};

export const Prestado = Template.bind({});

Prestado.args = {
  available: false,
};
