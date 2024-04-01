import { Meta, StoryObj } from "@storybook/react";
import IconBars from "./IconBars";
export default {
  title: "Iconos/Bars",
  component: IconBars,
} as Meta<typeof IconBars>;
export const DefaultIconBars: StoryObj<typeof IconBars> = {
  args: {},
};
export const WhiteIconBars: StoryObj<typeof IconBars> = {
  args: {
    className: "fill-white",
  },
};
