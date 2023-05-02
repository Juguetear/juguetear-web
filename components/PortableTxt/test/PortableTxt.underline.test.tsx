import { render, screen } from "@testing-library/react";
import { PortableTxt } from "../PortableTxt";

const underline = {
  _type: "blockscontent",
  style: "normal",
  children: [
    {
      text: "underline text",
      _type: "span",
      marks: ["underline"],
    },
  ],
};

describe("Render underline", () => {
  it("", () => {
    render(<PortableTxt content={underline} />);

    const ulStyle = screen.getByText("underline text");
    expect(ulStyle).toHaveStyle("text-decoration: underline");
  });
});
