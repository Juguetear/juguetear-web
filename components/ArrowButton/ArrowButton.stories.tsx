import { Meta, StoryObj } from "@storybook/react";
import { ArrowButton } from "./ArrowButton";

export default {
  title: "Arrow button",
  component: ArrowButton,
} as Meta<typeof ArrowButton>;

export const Disabled: StoryObj<typeof ArrowButton> = {
  args: {
    disabled: true,
    handleClick: () => null,
  },
};

export const ToRight: StoryObj<typeof ArrowButton> = {
  args: {
    direction: "right",
    handleClick: () => null,
  },
};
