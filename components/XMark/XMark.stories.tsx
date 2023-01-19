import { Meta, StoryFn } from "@storybook/react";
import XMark from "./XMark";

export default {
  title: "Iconos/XMark",
  component: XMark,
} as Meta<typeof XMark>;

const Template: StoryFn<typeof XMark> = (args) => <XMark {...args} />;

export const DefaultXMark = Template.bind({});
DefaultXMark.args = {};

export const WhiteXMark = Template.bind({});
WhiteXMark.args = { className: "fill-white" };
