import { Meta } from "@storybook/react";

import { IconCheckmark } from "./IconCheckmark";

export default {
  title: "Iconos/Checkmark",
  component: IconCheckmark,
} as Meta<typeof IconCheckmark>;

export const Default = {
  args: {
    className: "fill-green",
  },
};
