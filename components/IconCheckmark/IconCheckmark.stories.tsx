import { Meta, StoryFn } from "@storybook/react";

import { IconCheckmark } from "./IconCheckmark";

export default {
  title: "Iconos/Checkmark",
  component: IconCheckmark,
} as Meta<typeof IconCheckmark>;

const Template: StoryFn<typeof IconCheckmark> = (args) => (
  <IconCheckmark {...args} />
);

export const Default = Template.bind({});

Default.args = {
  className: "fill-green",
};
