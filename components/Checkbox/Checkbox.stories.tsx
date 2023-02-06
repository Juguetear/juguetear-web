import { Meta, StoryObj } from "@storybook/react";
import { Checkbox, CheckboxProps } from "./Checkbox";

export default {
  title: "Checkbox",
  component: Checkbox,
  argTypes: {
    checked: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    label: {
      control: "text",
    },
    numberOfCheckboxes: {
      type: "number",
      defaultValue: 2,
    },
  },
  args: {
    checked: false,
  },
} as Meta<typeof Checkbox>;

type Story = StoryObj<typeof Checkbox>;

export const SampleCheckbox: Story = {
  args: {
    label: "Checkbox",
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    label: "Checked",
  },
};

export const Unchecked: Story = {
  args: {
    label: "Unchecked",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: "Disabled",
  },
};

interface MultipleCheckboxProps extends CheckboxProps {
  numberOfCheckboxes: number;
}
export const MultipleCheckbox: StoryObj<MultipleCheckboxProps> = {
  render: (args) => {
    const { numberOfCheckboxes } = args;
    return (
      <ul className="flex flex-col justify-evenly">
        {Array.from(
          {
            length: numberOfCheckboxes,
          },
          (_, i) => (
            <Checkbox key={i} label={`Checkbox ${i}`} />
          )
        )}
      </ul>
    );
  },
  name: "Multiple Checkboxes",
  args: {
    label: "Checkbox",
    numberOfCheckboxes: 2,
  },
};
