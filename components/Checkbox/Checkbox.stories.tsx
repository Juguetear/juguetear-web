import { Meta, StoryObj } from "@storybook/react";
import Checkbox from "./Checkbox";

export default {
  title: "Checkbox",
  component: Checkbox,
} as Meta<typeof Checkbox>;

export const SampleCheckbox: StoryObj<typeof Checkbox> = {
  args: {
    label: "Checkbox",
  },
};
