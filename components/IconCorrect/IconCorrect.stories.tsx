import { ComponentMeta, ComponentStory } from "@storybook/react";

import { IconCorrect } from "./IconCorrect";

export default {
  title: "Icon Correct",
  component: IconCorrect,
} as ComponentMeta<typeof IconCorrect>;

const Template: ComponentStory<typeof IconCorrect> = (args) => (
  <IconCorrect {...args} />
);

export const IconCorrectDefault = Template.bind({});

IconCorrectDefault.args = {
  className: "fill-green",
};