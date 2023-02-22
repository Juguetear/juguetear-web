import { Meta, StoryFn } from "@storybook/react";
import { Link } from "./Link";

export default {
  title: "Link",
  component: Link,
} as Meta<typeof Link>;

// eslint-disable-next-line react/react-in-jsx-scope
const Template: StoryFn<typeof Link> = (args) => <Link {...args} />;

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
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
