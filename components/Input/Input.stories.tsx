import { Meta, StoryFn } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import Input from "./Input";

export default {
  title: "Input",
  component: Input,
  args: {
    required: false,
    name: "input",
  },
} as Meta<typeof Input>;

export const Default: StoryFn<typeof Input> = (args) => (
  <Input {...args} label="Texto" helperText="Mensaje" name="input" />
);

export const Error: StoryFn<typeof Input> = (args) => (
  <Input {...args} label="Texto" helperText="Mensaje" error />
);

export const Focus: StoryFn<typeof Input> = (args) => (
  <Input {...args} id="focus" label="Texto" helperText="Mensaje" />
);

Focus.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const item = await canvas.findByLabelText(/Texto/i);
  await userEvent.click(item);
};

export const Required: StoryFn<typeof Input> = (args) => (
  <Input {...args} label="Texto" helperText="Mensaje" required />
);

export const Disabled: StoryFn<typeof Input> = (args) => (
  <Input {...args} label="Texto" helperText="Mensaje" required disabled />
);
