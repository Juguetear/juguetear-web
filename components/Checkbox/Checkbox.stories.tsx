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
} as Meta<typeof Checkbox>;

export const SampleCheckbox: StoryObj<typeof Checkbox> = {
  args: {
    label: "Checkbox",
  },
};

export const Checked: StoryObj<typeof Checkbox> = {
  args: {
    checked: true,
    label: "Checked",
  },
};

export const Unchecked: StoryObj<typeof Checkbox> = {
  args: {
    checked: false,
    label: "Unchecked",
  },
};

export const Disabled: StoryObj<typeof Checkbox> = {
  args: {
    checked: false,
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
