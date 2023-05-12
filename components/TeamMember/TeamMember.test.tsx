import { render, screen } from "@testing-library/react";
import { TeamMember, TeamMemberProps } from "components/TeamMember/TeamMember";

const member: TeamMemberProps = {
  _id: "1",
  name: "Miguevara",
  surname: "Pantoja",
  pronouns: "Él",
  role: "Capitan",
  contactLinks: [
    { name: "Instagram", url: "https://instagram.com/john-doe" },
    { name: "Linkedin", url: "https://linkedin.com/john-doe" },
  ],
};

describe("TeamMember", () => {
  it("renders the component", () => {
    render(<TeamMember {...member} />);

    const component = screen.getByTestId("team-member");
    expect(component).toBeInTheDocument();
  });

  it("renders the profile image and placeholder", () => {
    render(<TeamMember {...member} />);
    if (member.image) {
      const image = screen.getByRole("img") as HTMLImageElement;
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute("src");
      expect(image).toHaveAttribute("alt", member.name);
    } else {
      const placeholder = screen.getByTestId("image-placeholder");
      expect(placeholder).toBeInTheDocument();
    }
  });

  it("renders the profile name", () => {
    render(<TeamMember {...member} />);
    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(member.name);
  });

  it("renders the profile position", () => {
    render(<TeamMember {...member} />);
    const role = screen.getByTestId("member-role");
    expect(role).toBeInTheDocument();
  });

  it("renders the social links", () => {
    render(<TeamMember {...member} />);
    const links = screen.getAllByRole("link") as HTMLAnchorElement[];
    links.forEach((link) => {
      expect(link).toHaveAttribute("href");
      expect(link).toHaveAttribute("target", "_blank");
    });
  });
});
