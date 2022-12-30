import { ComponentMeta, ComponentStory } from "@storybook/react";

import { IconCheckmark } from "./IconCheckmark";

export default {
  title: "Iconos/Checkmark",
  component: IconCheckmark,
} as ComponentMeta<typeof IconCheckmark>;

const Template: ComponentStory<typeof IconCheckmark> = (args) => (
  <IconCheckmark {...args} />
);

export const Default = Template.bind({});

Default.args = {
  className: "fill-green",
};
