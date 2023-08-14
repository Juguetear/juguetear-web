import { Meta, StoryObj } from "@storybook/react";

import { State } from "./State";

type Story = StoryObj<typeof State>;

export default {
  title: "Component/State",
  component: State,
} as Meta<typeof State>;

export const Disponible: Story = {
  args: {
    available: true,
  },
};

export const Prestado: Story = {
  args: {
    available: false,
  },
};
