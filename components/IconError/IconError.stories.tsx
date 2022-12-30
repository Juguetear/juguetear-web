import { ComponentMeta, ComponentStory } from "@storybook/react";

import { IconError } from "./IconError";

export default {
  title: "Iconos/Error",
  component: IconError,
} as ComponentMeta<typeof IconError>;

const Template: ComponentStory<typeof IconError> = (args) => (
  <IconError {...args} />
);

export const Default = Template.bind({});

Default.args = {
  className: "fill-red",
};
