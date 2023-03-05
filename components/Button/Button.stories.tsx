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

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  appearance: "button",
  children: <>button</>,
};

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
      <div>
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
