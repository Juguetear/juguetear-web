import { render, screen } from "@testing-library/react";
import XMark from "./XMark";

describe("XMark", () => {
  it("XMark renders correctly", () => {
    render(<XMark />);
  });

  it("XMark component adds className prop", () => {
    const className = "fill-white";
    render(<XMark className={className} />);
    const svgElement = screen.getByTestId(className);
    expect(svgElement).toHaveClass(className);
  });

  it("XMark has aria-hidden attribute", () => {
    const className = "fill-white";
    render(<XMark className={className} />);
    const svgElement = screen.getByTestId(className);
    expect(svgElement).toHaveAttribute("aria-hidden", "true");
  });
});
