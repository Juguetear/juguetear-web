import { render, screen } from "@testing-library/react";
import { PortableTxt } from "../PortableTxt";

const strong = {
  _type: "blockscontent",
  children: [
    {
      _type: "span",
      marks: ["strong"],
      text: "Strong text",
    },
  ],
  style: "normal",
};

describe("Render strong", () => {
  it("", () => {
    render(<PortableTxt content={strong} />);

    const strongEl = screen.getByText("Strong text");
    expect(strongEl).toContainHTML(`<strong>Strong text</strong>`);
  });
});
