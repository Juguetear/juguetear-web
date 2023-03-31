import { Meta, StoryObj } from "@storybook/react";
import { Logo } from "./Logo";

export default {
  title: "Logo",
  component: Logo,
} as Meta<typeof Logo>;

export const LightBackground: StoryObj<typeof Logo> = {
  args: {
    darkBackground: false,
  },
};

export const DarkBackground: StoryObj<typeof Logo> = {
  args: {
    darkBackground: true,
  },
  parameters: {
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#00245A" }],
    },
  },
};

export const ExtendedWithSVGPropsUsingClassnameExample: StoryObj<typeof Logo> =
  {
    args: {
      darkBackground: false,
      className: "w-16 h-16",
    },
  };
