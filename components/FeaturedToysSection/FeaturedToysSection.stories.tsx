import { Meta, StoryObj } from "@storybook/react";
import { FeaturedToysSection } from "./FeaturedToysSection";
import { featuredToysData } from "components/FeaturedToysSection/featuredToysData";

const meta = {
  title: "FeaturedToysSection",
  component: FeaturedToysSection,
  args: featuredToysData,
} satisfies Meta<typeof FeaturedToysSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
