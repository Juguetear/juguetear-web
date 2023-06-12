import { screen, render } from "@testing-library/react";
import { TeamMemberProps } from "components/TeamMember/TeamMember";
import React from "react";
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

describe("ProjectParticipants", () => {
  it("should render", () => {
    render(<ProjectParticipants {...members} />);
    expect(
      screen.getByText("Quienes participan en el proyecto")
    ).toBeInTheDocument();
  });
});
