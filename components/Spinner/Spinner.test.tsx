import { render, screen } from "@testing-library/react";
import Spinner from "./Spinner";

describe("Spinner", () => {
  test("Spinner renders correctly", () => {
    render(<Spinner className="" />);
    const svgElement = screen.getByTestId("spinner");
    expect(svgElement).toBeInTheDocument();
  });

  test("renders the SVG element with the correct class name", () => {
    render(<Spinner className="test-class" />);
    const svgElement = screen.getByTestId("spinner");
    expect(svgElement).toHaveClass("test-class");
  });

  test("Spinner has the correct aria-labelledby attribute", () => {
    render(<Spinner className="" />);
    const svgElement = screen.getByTestId("spinner");
    expect(svgElement).toHaveAttribute("aria-labelledby", "juguetear-spinner");
  });

  test("Spinner should have the correct accesible name", () => {
    render(<Spinner className="" />);
    const svgElement = screen.getByRole("img");
    expect(svgElement).toHaveAccessibleName("Cargando");
  });
});
