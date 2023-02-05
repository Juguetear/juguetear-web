import { Meta, StoryFn } from "@storybook/react";
import Input from "./Input";

export default {
  title: "Input",
  component: Input,
  args: {
    required: false,
  },
} as Meta<typeof Input>;

export const Default: StoryFn<typeof Input> = (args) => (
  <Input {...args} label="Texto" helperText="Mensaje error" name="input" />
);

export const Error: StoryFn<typeof Input> = (args) => (
  <Input
    {...args}
    label="Texto"
    helperText="Mensaje error"
    name="input-error"
    error
  />
);

export const Touched: StoryFn<typeof Input> = (args) => (
  <Input
    {...args}
    label="Texto"
    helperText="Mensaje error"
    name="input-touched"
    className="ring-[3px] shadow-2md bg-blue-light"
  />
);

export const Active: StoryFn<typeof Input> = (args) => (
  <Input
    {...args}
    label="Texto"
    helperText="Mensaje error"
    name="input-active"
    className="ring-orange"
  />
);

export const Required: StoryFn<typeof Input> = (args) => (
  <Input
    {...args}
    label="Texto"
    helperText="Mensaje error"
    name="input-required"
    required
  />
);
