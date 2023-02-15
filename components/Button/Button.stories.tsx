import { Meta, StoryFn } from "@storybook/react";
import Image from "next/image";
import PdfSvg from "../assets/pdf.svg";
import { Button } from "./Button";

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

export const button = Template.bind({});
button.args = {
  appearance: "button",
  children: <>button</>,
};

export const simpleButton = Template.bind({});
simpleButton.args = {
  appearance: "button",
  children: <>button</>,
};

export const link = Template.bind({});
link.args = {
  appearance: "link",
  children: <>link</>,
};

export const buttonWithIcon = Template.bind({});
buttonWithIcon.args = {
  appearance: "buttonWithIcon",
  children: (
    <>
      <div className="pr-3">
        <Image src={PdfSvg} alt="SVG" width={27} height={35} />
      </div>
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
