import { Meta, StoryFn } from "@storybook/react";
import Cross from "./Cross";

export default {
  title: "Cross",
  component: Cross,
} as Meta<typeof Cross>;

const Template: StoryFn<typeof Cross> = (args) => <Cross {...args} />;

export const BlackCross = Template.bind({});
BlackCross.args = { className: "" };
