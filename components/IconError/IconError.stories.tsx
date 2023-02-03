import { Meta } from "@storybook/react";

import { IconError } from "./IconError";

export default {
  title: "Iconos/Error",
  component: IconError,
} as Meta<typeof IconError>;

export const Default = {
  args: {
    className: "fill-red",
  },
};
