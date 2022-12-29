import { ComponentMeta, ComponentStory } from "@storybook/react";

import { IconError } from "./IconError";

export default {
  title: "Icon Error",
  component: IconError,
} as ComponentMeta<typeof IconError>;

const Template: ComponentStory<typeof IconError> = (args) => (
  <IconError {...args} />
);

export const IconErrorDefault = Template.bind({});

IconErrorDefault.args = {
  className: "fill-red",
};
