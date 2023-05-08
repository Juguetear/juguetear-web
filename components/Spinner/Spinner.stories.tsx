import { Meta, StoryObj } from "@storybook/react";
import Spinner from "./Spinner";

export default {
  title: "Spinner",
  component: Spinner,
} as Meta<typeof Spinner>;

export const DefaultSpinner: StoryObj = {
  args: {
    className: "",
  },
};

export const BigSpinner: StoryObj = {
  args: {
    className: "w-[100px]",
  },
};

export const BlueSpinner: StoryObj = {
  args: {
    className: "fill-blue",
  },
};
