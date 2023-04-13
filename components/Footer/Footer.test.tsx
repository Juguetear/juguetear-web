import { render, screen } from "@testing-library/react";
import * as navigation from "next/navigation";

import { Footer, FooterItem } from "./Footer";

const usePathname = jest.spyOn(navigation, "usePathname");

const mockPathname = (pathname: string) => {
  usePathname.mockImplementationOnce(() => pathname);
};

describe("Footer component ", () => {
  it("should render", async () => {
    mockPathname("/");
    render(<Footer links={[]} />);
    const footer = await screen.findByTestId("footer");

    expect(footer).toBeInTheDocument();
  });

  it("should have accesible description", async () => {
    mockPathname("/");
    render(<Footer links={[]} />);
    const footer = await screen.findByTestId("footer");

    expect(footer).toHaveAttribute("aria-label", "Footer");
  });

  it("should render the logo link", async () => {
    mockPathname("/foo");
    render(<Footer links={[]} />);
    const logoLink = await screen.findByRole("link");

    expect(logoLink).toBeInTheDocument();
  });

  it("logo link should have accesible name", async () => {
    mockPathname("/");
    render(<Footer links={[]} />);
    const logoLink = await screen.findByRole("link");

    expect(logoLink).toHaveAttribute("aria-label", "Home");
  });
});

describe("component FooterItem", () => {
  it("should have text-white class if current pathname is not equal to route", async () => {
    mockPathname("other-path");
    render(<FooterItem route="foo" />);
    const about = await screen.findByRole("link");

    expect(about).toHaveClass("text-white");
  });
});
