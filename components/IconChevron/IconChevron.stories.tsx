import { Meta } from "@storybook/react";

import { IconChevron } from "./IconChevron";

export default { title: "Iconos/Chevron", component: IconChevron } as Meta<
  typeof IconChevron
>;

export const Up = { args: { open: true, className: "fill-orange" } };

export const Down = { args: { open: false, className: "fill-orange" } };
