import { Meta, StoryObj } from "@storybook/react";

import { IconCheckmark } from "./IconCheckmark";

type Story = StoryObj<typeof IconCheckmark>;

export default {
  title: "Iconos/Checkmark",
  component: IconCheckmark,
} as Meta<typeof IconCheckmark>;

export const Default: Story = {
  args: {
    className: "fill-green",
  },
};
