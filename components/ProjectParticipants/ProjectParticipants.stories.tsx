import { Meta, StoryObj } from "@storybook/react";
import { TeamMemberProps } from "components/TeamMember/TeamMember";
import { ProjectParticipants } from "./ProjectParticipants";

const members: TeamMemberProps[] = [
  {
    _id: "1",
    name: "João",
    surname: "Silva",
    pronouns: "Él",
    role: "Coordenador",
    contactLinks: [
      { name: "Linkedin", url: "https://linkedin.com/in/joao-silva" },
      { name: "Instagram", url: "https://instagram.com/joao-silva" },
    ],
  },
  {
    _id: "2",
    name: "Maria",
    surname: "Santos",
    pronouns: "Ella",
    role: "Desarrollador",
    contactLinks: [
      { name: "Linkedin", url: "https://linkedin.com/in/maria-santos" },
      { name: "Instagram", url: "https://instagram.com/maria-santos" },
    ],
  },
];
const meta = {
  title: "ProjectParticipants",
  args: {
    ...members,
  },
  component: ProjectParticipants,
} satisfies Meta<typeof ProjectParticipants>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    viewport: {
      defaultViewport: "responsive",
    },
  },
};

export const Tablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
};

export const SmallMobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

export const LargeMobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile2",
    },
  },
};
