import { Meta, StoryFn } from "@storybook/react";
import PdfSvg from "../assets/pdf.svg";
import { Button } from "./Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    handleClick: {
      action: "Clicked",
    },
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const button = Template.bind({});
button.args = {
  appearance: "button",
  text: "button",
  handleClick: () => {
    alert("button");
  },
};

export const simpleButton = Template.bind({});
simpleButton.args = {
  appearance: "button",
  text: "button",
  handleClick: () => {},
};

export const link = Template.bind({});
link.args = {
  appearance: "link",
  text: "link",
  handleClick: () => {},
};

export const buttonWithIcon = Template.bind({});
buttonWithIcon.args = {
  appearance: "buttonWithIcon",
  text: "buttonWithIcon",
  icon: PdfSvg,
  handleClick: () => {},
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  appearance: "button",
  text: "button disabled",
};
