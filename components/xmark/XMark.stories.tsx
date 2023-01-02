import { Meta, StoryFn } from "@storybook/react";
import XMark from "./XMark";

export default {
  title: "Cross",
  component: XMark,
} as Meta<typeof XMark>;

const Template: StoryFn<typeof XMark> = (args) => <XMark {...args} />;

export const BlackCross = Template.bind({});
BlackCross.args = { className: "" };
