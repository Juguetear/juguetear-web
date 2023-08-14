import { Meta, StoryObj } from "@storybook/react";
import { Checkbox, CheckboxProps } from "./Checkbox";

export default {
  title: "Component/Checkbox",
  component: Checkbox,
  argTypes: {
    defaultChecked: {
      table: {
        disable: true,
      },
    },
    disabled: {
      control: "boolean",
    },
    onChange: {
      action: true,
      table: {
        disable: true,
      },
    },
  },
  args: {
    defaultChecked: false,
    id: "checkbox",
  },
} as Meta<typeof Checkbox>;

type Story = StoryObj<typeof Checkbox>;

export const SampleCheckbox: Story = {
  args: {
    label: "Checkbox",
    id: "checkbox",
  },
};

export const Checked: Story = {
  args: {
    defaultChecked: true,
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
            <Checkbox key={i} label={`Checkbox ${i}`} id={`checkbox${i}`} />
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
  argTypes: {
    numberOfCheckboxes: {
      type: "number",
      defaultValue: 2,
    },
  },
};
