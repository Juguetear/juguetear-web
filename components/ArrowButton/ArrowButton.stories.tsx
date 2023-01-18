import { Meta, StoryFn } from "@storybook/react";
import { ArrowButton } from "./ArrowButton";

export default {
  title: "Arrow button",
  component: ArrowButton,
} as Meta<typeof ArrowButton>;

const Template: StoryFn<typeof ArrowButton> = (args) => (
  <ArrowButton {...args} />
);

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  handleClick: () => {},
};

export const ToRight = Template.bind({});
ToRight.args = {
  direction: "right",
  handleClick: () => {},
};
