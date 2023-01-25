import { Meta, StoryFn } from "@storybook/react";

import { IconChevron } from "./IconChevron";

export default {
  title: "Iconos/Chevron",
  component: IconChevron,
} as Meta<typeof IconChevron>;

const Template: StoryFn<typeof IconChevron> = (args) => (
  <IconChevron {...args} />
);

export const Up = Template.bind({});

Up.args = {
  open: true,
  className: "fill-orange",
};

export const Down = Template.bind({});

Down.args = {
  open: false,
  className: "fill-orange",
};
