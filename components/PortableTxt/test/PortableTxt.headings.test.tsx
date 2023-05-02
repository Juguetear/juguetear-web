import { render, screen } from "@testing-library/react";
import { PortableTxt } from "../PortableTxt";

const h1 = {
  _type: "blockscontent",
  style: "h1",
  children: [
    {
      _type: "span",
      text: "H1",
    },
  ],
};

const h2 = {
  _type: "blockscontent",
  style: "h2",
  children: [
    {
      _type: "span",
      text: "H2",
    },
  ],
};

describe("Render headings", () => {
  it("H1 heading", () => {
    render(<PortableTxt content={h1} />);

    const h1El = screen.getByText("H1");
    expect(h1El).toContainHTML(`<h1 class="text-center">H1</h1>`);
  });

  it("H2 heading", () => {
    render(<PortableTxt content={h2} />);

    const h2El = screen.getByText("H2");
    expect(h2El).toContainHTML("<h2>H2</h2>");
  });
});
