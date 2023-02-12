import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

import { Navbar } from "./Navbar";

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

  it("should have accesible descriptions and roles", async () => {
    mockRoute("/");
    const { findByTestId } = render(<Navbar />);
    const nav = await findByTestId("nav");

    expect(nav).toHaveAttribute("aria-label", "Navegacion principal");
    expect(nav).toHaveAttribute("role", "navigation");
  });

  it("about-li should render with text-orange class if current path is about", async () => {
    mockRoute("about");
    const { findByTestId } = render(<Navbar />);
    const about = await findByTestId("li-about");

    expect(about).toHaveClass("text-orange");
  });

  it("about-li should render with text-blue class if current path is not about", async () => {
    mockRoute("other-path");
    const { findByTestId } = render(<Navbar />);
    const about = await findByTestId("li-about");

    expect(about).toHaveClass("text-blue");
  });

  it("about-link should have aria-current='page' if current path is about", async () => {
    mockRoute("about");
    const { findByTestId } = render(<Navbar />);
    const link_about = await findByTestId("link-about");

    expect(link_about).toHaveAttribute("aria-current", "page");
  });

  it("about-link should not have aria-current if current path is not about", async () => {
    mockRoute("other-page");
    const { findByTestId } = render(<Navbar />);
    const link_about = await findByTestId("link-about");

    expect(link_about).not.toHaveAttribute("aria-current");
  });
});
