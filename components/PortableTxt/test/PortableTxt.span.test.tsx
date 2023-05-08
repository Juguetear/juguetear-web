import { render, screen } from "@testing-library/react";
import { PortableTxt } from "../PortableTxt";

const input = {
  _type: "blockscontent",
  children: [
    {
      _type: "span",
      text: "Just a span",
    },
  ],
};

describe("Render single span", () => {
  it("", () => {
    render(<PortableTxt content={input} />);

    const spanEl = screen.getByText("Just a span");
    expect(spanEl).toContainHTML("<p>Just a span</p>");
  });
});
