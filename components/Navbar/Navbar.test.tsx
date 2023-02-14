import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

import { Navbar, NavbarItem } from "./Navbar";

const useRouter = jest.spyOn(require("next/router"), "useRouter");

const mockRoute = (route: string) => {
  useRouter.mockImplementationOnce(() => ({
    route,
  }));
};

describe("Navbar component ", () => {
  it("should render", async () => {
    mockRoute("/");
    const { findByRole } = render(<Navbar isCurrentIndex />);
    const nav = await findByRole("navigation");

    expect(nav).toBeInTheDocument();
  });

  it("should have accesible descriptions", async () => {
    mockRoute("/");
    const { findByRole } = render(<Navbar isCurrentIndex />);
    const nav = await findByRole("navigation");

    expect(nav).toHaveAttribute("aria-label", "Navegacion principal");
  });

  it("NavbarItem should have text-orange class if isCurrent prop is set to true", async () => {
    mockRoute("about");
    const { findByRole } = render(<NavbarItem route="foo" isCurrent={true} />);
    const about = await findByRole("listitem");

    expect(about).toHaveClass("text-orange");
  });

  it("NavbarItem should have text-blue class if isCurrent prop is set to false", async () => {
    mockRoute("other-path");
    const { findByRole } = render(<NavbarItem route="foo" isCurrent={false} />);
    const about = await findByRole("listitem");

    expect(about).toHaveClass("text-blue");
  });

  it("NavbarItem > a should have a attribute aria-current='page' if isCurrent prop is set to true", async () => {
    mockRoute("about");
    const { findByRole } = render(<NavbarItem route="foo" isCurrent={true} />);
    const link_about = await findByRole("link");

    expect(link_about).toHaveAttribute("aria-current", "page");
  });

  it("NavbarItem > a should have a attribute aria-current=false if isCurrent prop is set to false", async () => {
    mockRoute("other-page");
    const { findByRole } = render(<NavbarItem route="foo" isCurrent={false} />);
    const link_about = await findByRole("link");

    expect(link_about).toHaveAttribute("aria-current", "false");
  });
});
