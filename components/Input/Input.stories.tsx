import { Meta, StoryFn } from "@storybook/react";
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
  <Input
    {...args}
    label="Texto"
    helperText="Mensaje"
    className="ring-[3px] shadow-2md bg-blue-light"
  />
);

export const Required: StoryFn<typeof Input> = (args) => (
  <Input {...args} label="Texto" helperText="Mensaje" required />
);

export const Disabled: StoryFn<typeof Input> = (args) => (
  <Input {...args} label="Texto" helperText="Mensaje" required disabled />
);
