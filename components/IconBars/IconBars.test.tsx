import { render, screen } from "@testing-library/react";
import IconBars from "./IconBars";

describe("XMark", () => {
  it("IconBars renders correctly", () => {
    render(<IconBars />);
  });

  it("XMark component adds className prop", () => {
    const className = "fill-white";
    render(<IconBars className={className} />);
    const svgElement = screen.getByTestId(className);
    expect(svgElement).toHaveClass(className);
  });

  it("XMark has aria-hidden attribute", () => {
    const className = "fill-white";
    render(<IconBars className={className} />);
    const svgElement = screen.getByTestId(className);
    expect(svgElement).toHaveAttribute("aria-hidden", "true");
  });
});
