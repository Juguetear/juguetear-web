import { Meta, StoryFn } from "@storybook/react";

import { State } from "./State";

export default {
  title: "State",
  component: State,
} as Meta<typeof State>;

const Template: StoryFn<typeof State> = (args) => <State {...args} />;

export const Disponible = Template.bind({});

Disponible.args = {
  available: true,
};

export const Prestado = Template.bind({});

Prestado.args = {
  available: false,
};
