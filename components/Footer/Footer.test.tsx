import { render, screen } from "@testing-library/react";
import { Footer, FooterItem } from "./Footer";

describe("Footer component ", () => {
  it("should render", async () => {
    render(<Footer links={[]} />);
    const footer = screen.getByRole("contentinfo");

    expect(footer).toBeInTheDocument();
  });

  it("should have accesible description", async () => {
    render(<Footer links={[]} />);
    const footer = screen.getByRole("contentinfo");

    expect(footer).toHaveAttribute("aria-label", "Footer");
  });

  it("should render the logo link", async () => {
    render(<Footer links={[]} />);
    const logoLink = screen.getByRole("link");

    expect(logoLink).toBeInTheDocument();
  });

  it("logo link should have accesible name", async () => {
    render(<Footer links={[]} />);
    const logoLink = screen.getByRole("link");

    expect(logoLink).toHaveAttribute("aria-label", "Home");
  });
});

describe("component FooterItem", () => {
  it("should have text-white class if current pathname is not equal to route", async () => {
    render(<FooterItem route="foo" />);
    const about = screen.getByRole("link");

    expect(about).toHaveClass("text-white");
  });
});
