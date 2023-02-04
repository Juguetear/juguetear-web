import { Meta, StoryFn } from "@storybook/react";
import { Button } from "./Button";

export default {
  title: "button",
  component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  handleClick: () => {},
};

export const ToRight = Template.bind({});
ToRight.args = {
  handleClick: () => {},
};

export const button = Template.bind({});
button.args = {
  appearance: "button",
};

export const link = Template.bind({});
link.args = {
  appearance: "link",
};

export const buttonWithIcon = Template.bind({});
buttonWithIcon.args = {
  appearance: "buttonWithIcon",
};
