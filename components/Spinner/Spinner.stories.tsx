import { Meta, StoryObj } from "@storybook/react";
import Spinner from "./Spinner";

export default {
  title: "Iconos/Spinner",
  component: Spinner,
} as Meta<typeof Spinner>;

export const DefaultSpinner: StoryObj = {};

export const BigSpinner: StoryObj = {
  args: {
    className: "fill-blue w-[100px]",
  },
};

export const GreenSpinner: StoryObj = {
  args: {
    className: "fill-green",
  },
};
