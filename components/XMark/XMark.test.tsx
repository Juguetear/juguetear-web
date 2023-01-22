import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import XMark from "./XMark";

describe("XMark", () => {
  it("XMark renders correctly", () => {
    render(<XMark />);
  });

  it("XMark component adds className prop", () => {
    const className = "fill-white";
    const { container } = render(<XMark className={className} />);
    expect(container.firstChild).toHaveClass(className);
  });
});
