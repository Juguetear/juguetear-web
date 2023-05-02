import { render, screen } from "@testing-library/react";
import { PortableTxt } from "../PortableTxt";

const em = {
  _type: "blockscontent",
  style: "normal",
  children: [
    {
      text: "emphasis",
      _type: "span",
      marks: ["em"],
    },
  ],
};

describe("Render emphasis", () => {
  it("", () => {
    render(<PortableTxt content={em} />);

    const emEl = screen.getByText("emphasis");
    expect(emEl).toContainHTML(
      `<em class="font-semibold text-blue">emphasis</em>`
    );
  });
});
