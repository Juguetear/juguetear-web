import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Logo } from "./Logo";

describe("Logo component", () => {
  it("Renders blue logo by default", () => {
    const { getByTestId } = render(<Logo />);
    const logo = getByTestId("blue-logo");
    expect(logo).toBeInTheDocument();
  });

  it("Renders white logo when darkBackground prop is true", () => {
    const { getByTestId } = render(<Logo darkBackground={true} />);
    const logo = getByTestId("white-logo");
    expect(logo).toBeInTheDocument();
  });

  it("Should have a title", () => {
    const { getByRole } = render(<Logo />);
    const title = getByRole("img", {
      name: /juguetear logo/i,
    });
    expect(title).toHaveAccessibleName("Juguetear logo");
  });

  it("Should have a role of img", () => {
    const { getByRole } = render(<Logo />);
    const title = getByRole("img");
    expect(title).toBeInTheDocument();
  });

  it("Should have aria-labelledby", () => {
    const { container } = render(<Logo />);
    const logo = container.querySelector("svg");
    expect(logo).toHaveAttribute("aria-labelledby");
  });
});
