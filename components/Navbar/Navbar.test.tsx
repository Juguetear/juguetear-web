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
    const { findByTestId } = render(<Navbar />);
    const nav = await findByTestId("nav");

    expect(nav).toBeInTheDocument();
  });

  it("should have accesible descriptions", async () => {
    mockRoute("/");
    const { findByTestId } = render(<Navbar />);
    const nav = await findByTestId("nav");

    expect(nav).toHaveAttribute("aria-label", "Navegacion principal");
  });

  it("NavbarItem should have text-orange class if isCurrent prop is set to true", async () => {
    mockRoute("about");
    const { findByTestId } = render(
      <NavbarItem route="foo" isCurrent={true} />
    );
    const about = await findByTestId("li-foo");

    expect(about).toHaveClass("text-orange");
  });

  it("NavbarItem should have text-blue class if isCurrent prop is set to false", async () => {
    mockRoute("other-path");
    const { findByTestId } = render(
      <NavbarItem route="foo" isCurrent={false} />
    );
    const about = await findByTestId("li-foo");

    expect(about).toHaveClass("text-blue");
  });

  it("NavbarItem > a should have a attribute aria-current='page' if isCurrent prop is set to true", async () => {
    mockRoute("about");
    const { findByTestId } = render(
      <NavbarItem route="foo" isCurrent={true} />
    );
    const link_about = await findByTestId("link-foo");

    expect(link_about).toHaveAttribute("aria-current", "page");
  });

  it("NavbarItem > a should not have a attribute aria-current if isCurrent prop is set to false", async () => {
    mockRoute("other-page");
    const { findByTestId } = render(
      <NavbarItem route="foo" isCurrent={false} />
    );
    const link_about = await findByTestId("link-foo");

    expect(link_about).not.toHaveAttribute("aria-current");
  });
});
