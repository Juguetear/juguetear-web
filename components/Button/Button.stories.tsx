import { Meta, StoryObj } from "@storybook/react";
import { PDFIcon } from "../assets/PDFIcon";
import { Button } from "./Button";

const meta = {
  title: "Component/Button",
  component: Button,
  argTypes: {
    onClick: {
      action: "Clicked",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SimpleButton: Story = {
  args: {
    appearance: "button",
    children: <>button</>,
  },
};

export const Link: Story = {
  args: {
    appearance: "link",
    children: <>link</>,
  },
};

export const ButtonWithIcon: Story = {
  args: {
    appearance: "buttonWithIcon",
    children: (
      <>
        <PDFIcon />
        buttonWithIcon
      </>
    ),
  },
};

export const Disabled: Story = {
  args: {
    appearance: "button",
    disabled: true,
    children: <>button disabled</>,
  },
};
