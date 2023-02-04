import { Meta, StoryObj } from "@storybook/react";

import { IconChevron } from "./IconChevron";

type Story = StoryObj<typeof IconChevron>;

export default { title: "Iconos/Chevron", component: IconChevron } as Meta<
  typeof IconChevron
>;

export const Up: Story = { args: { open: true, className: "fill-orange" } };

export const Down: Story = { args: { open: false, className: "fill-orange" } };
