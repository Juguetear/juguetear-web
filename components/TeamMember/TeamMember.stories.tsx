import { Meta, StoryObj } from "@storybook/react";
import { TeamMember } from "./TeamMember";

const meta = {
  title: "TeamMember",
  component: TeamMember,
  args: {
    _id: "1",
    name: "Miguel",
    surname: "Perez",
    pronouns: "Él",
    role: "Capitan",
    contactLinks: [
      {
        _key: "1",
        name: "Instagram",
        url: "https://instagram.com/miguel-perez",
      },
      { _key: "2", name: "Linkedin", url: "https://linkedin.com/miguel-perez" },
    ],
  },
} satisfies Meta<typeof TeamMember>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SmallMobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};
