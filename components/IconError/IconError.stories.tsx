import { Meta, StoryFn } from "@storybook/react";

import { IconError } from "./IconError";

export default {
  title: "Iconos/Error",
  component: IconError,
} as Meta<typeof IconError>;

const Template: StoryFn<typeof IconError> = (args) => <IconError {...args} />;

export const Default = Template.bind({});

Default.args = {
  className: "fill-red",
};
