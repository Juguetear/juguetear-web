import { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { ArrowButton } from "./ArrowButton";

export default {
  title: "Arrow button",
  component: ArrowButton,
  argTypes: {
    onClick: { action: "Clicked" },
  },
} as Meta<typeof ArrowButton>;

export const Disabled: StoryObj<typeof ArrowButton> = {
  args: {
    disabled: true,
  },
};

export const ToRight: StoryObj<typeof ArrowButton> = {
  args: {
    direction: "right",
  },
};

ToRight.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.click(canvas.getByRole("button"));
};
