import { Meta, StoryObj } from "@storybook/react";
import XMark from "./XMark";
export default {
  title: "Iconos/XMark",
  component: XMark,
} as Meta<typeof XMark>;
export const DefaultXMark: StoryObj<typeof XMark> = {
  args: {},
};
export const WhiteXMark: StoryObj<typeof XMark> = {
  args: {
    className: "fill-white",
  },
};
