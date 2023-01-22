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

  it("Blue logo has aria-label attribute with the correct value", () => {
    const { getByTestId } = render(<Logo darkBackground={false} />);
    const logo = getByTestId("blue-logo");
    expect(logo).toHaveAttribute("aria-label", "Juguetear");
  });

  it("White logo has aria-label attribute with the correct value", () => {
    const { getByTestId } = render(<Logo darkBackground={true} />);
    const logo = getByTestId("white-logo");
    expect(logo).toHaveAttribute("aria-label", "Juguetear");
  });
});
