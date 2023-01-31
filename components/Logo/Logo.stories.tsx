import { Meta, StoryFn } from "@storybook/react";
import { Logo } from "./Logo";

export default {
  title: "Logo",
  component: Logo,
} as Meta<typeof Logo>;

const Template: StoryFn<typeof Logo> = (args) => <Logo {...args} />;

export const LightBackground = Template.bind({});
LightBackground.args = {
  darkBackground: false,
};

export const DarkBackground = Template.bind({});
DarkBackground.args = {
  darkBackground: true,
};

export const ExtendedWithSVGProps = Template.bind({});
ExtendedWithSVGProps.args = {
  darkBackground: false,
  className: "w-16 h-16",
};
