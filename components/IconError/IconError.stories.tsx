import { Meta, StoryObj } from "@storybook/react";

import { IconError } from "./IconError";

type Story = StoryObj<typeof IconError>;

export default {
  title: "Iconos/Error",
  component: IconError,
} as Meta<typeof IconError>;

export const Default: Story = {
  args: {
    className: "fill-red",
  },
};
