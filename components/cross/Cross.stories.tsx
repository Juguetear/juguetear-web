import { ComponentMeta, ComponentStory } from "@storybook/react";
import Cross from "./Cross";

export default {
  title: "Cross",
  component: Cross,
} as ComponentMeta<typeof Cross>;

const Template: ComponentStory<typeof Cross> = (args) => <Cross {...args} />;

export const SampleCross = Template.bind({});
SampleCross.args = { className: "", ariaLabel: "Aria Label" };
