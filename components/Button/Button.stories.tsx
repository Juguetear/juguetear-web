import { Meta, StoryFn } from "@storybook/react";
import { Button } from "./Button";
import { PDFIcon } from "./PDFIcon";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    onClick: {
      action: "Clicked",
    },
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const SimpleButton = Template.bind({});
SimpleButton.args = {
  appearance: "button",
  children: <>button</>,
};

export const Link = Template.bind({});
Link.args = {
  appearance: "link",
  children: <>link</>,
};

export const ButtonWithIcon = Template.bind({});
ButtonWithIcon.args = {
  appearance: "buttonWithIcon",
  children: (
    <>
      <PDFIcon />
      buttonWithIcon
    </>
  ),
};

export const Disabled = Template.bind({});
Disabled.args = {
  appearance: "button",
  disabled: true,
  children: <>button disabled</>,
};
