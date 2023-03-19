import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { Logo } from "./Logo";

describe("Logo component", () => {
  it("Renders blue logo by default", () => {
    render(<Logo />);
    const logo = screen.getByTestId("blue-logo");
    expect(logo).toBeInTheDocument();
  });

  it("Renders white logo when darkBackground prop is true", () => {
    render(<Logo darkBackground={true} />);
    const logo = screen.getByTestId("white-logo");
    expect(logo).toBeInTheDocument();
  });

  it("Should have a title", () => {
    render(<Logo />);
    const title = screen.getByRole("img", {
      name: /juguetear logo/i,
    });
    expect(title).toHaveAccessibleName("Juguetear logo");
  });

  it("Should have a role of img", () => {
    render(<Logo />);
    const logo = screen.getByRole("img");
    expect(logo).toBeInTheDocument();
  });

  it("Should have aria-labelledby", () => {
    render(<Logo />);
    const logo = screen.getByRole("img");
    expect(logo).toHaveAttribute("aria-labelledby");
  });

  it("Should render with prop className extended from SVGProps<SVGSVGElement>", () => {
    const className = "test-class";
    render(<Logo className={className} />);
    const logo = screen.getByTestId("blue-logo");
    expect(logo).toHaveClass(className);
  });
});
