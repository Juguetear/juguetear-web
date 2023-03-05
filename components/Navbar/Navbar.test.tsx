import { render, screen } from "@testing-library/react";

import { Navbar, NavbarItem } from "./Navbar";

const usePathname = jest.spyOn(require("next/navigation"), "usePathname");

const mockPathname = (pathname: string) => {
  usePathname.mockImplementationOnce(() => pathname);
};

describe("Navbar component ", () => {
  it("should render", async () => {
    mockPathname("/");
    render(<Navbar links={[]} />);
    const nav = await screen.findByRole("navigation");

    expect(nav).toBeInTheDocument();
  });

  it("should have accesible description", async () => {
    mockPathname("/");
    render(<Navbar links={[]} />);
    const nav = await screen.findByRole("navigation");

    expect(nav).toHaveAttribute("aria-label", "Navegacion principal");
  });

  it("should render the logo link", async () => {
    mockPathname("/foo");
    render(<Navbar links={[]} />);
    const logo_link = await screen.findByRole("link");

    expect(logo_link).toBeInTheDocument();
  });

  it("logo link should have accesible name", async () => {
    mockPathname("/");
    render(<Navbar links={[]} />);
    const logo_link = await screen.findByRole("link");

    expect(logo_link).toHaveAttribute("aria-label", "Home");
  });

  it("logo link should have aria-current='page' if currentPath='/'", async () => {
    mockPathname("/");
    render(<Navbar links={[]} />);
    const logo_link = await screen.findByRole("link");

    expect(logo_link).toHaveAttribute("aria-current", "page");
  });

  it("logo link should have aria-current=false if currentPath!='/'", async () => {
    mockPathname("/foo");
    render(<Navbar links={[]} />);
    const logo_link = await screen.findByRole("link");

    expect(logo_link).toHaveAttribute("aria-current", "false");
  });
});

describe("component NavbarItem", () => {
  it("should have text-orange class if isCurrent prop is set to true", async () => {
    mockPathname("about");
    render(<NavbarItem route="foo" isCurrent={true} />);
    const about = await screen.findByRole("listitem");

    expect(about).toHaveClass("text-orange");
  });

  it("should have text-blue class if isCurrent prop is set to false", async () => {
    mockPathname("other-path");
    render(<NavbarItem route="foo" isCurrent={false} />);
    const about = await screen.findByRole("listitem");

    expect(about).toHaveClass("text-blue");
  });

  it("link should have a attribute aria-current='page' if isCurrent prop is set to true", async () => {
    mockPathname("about");
    render(<NavbarItem route="foo" isCurrent={true} />);
    const link_about = await screen.findByRole("link");

    expect(link_about).toHaveAttribute("aria-current", "page");
  });

  it("link should have a attribute aria-current=false if isCurrent prop is set to false", async () => {
    mockPathname("other-page");
    render(<NavbarItem route="foo" isCurrent={false} />);
    const link_about = await screen.findByRole("link");

    expect(link_about).toHaveAttribute("aria-current", "false");
  });
});
