import { render, screen } from "@testing-library/react";
import { em, h1, h2, images, span, strong, underline } from "./mockedData";
import { PortableTxt } from "./PortableTxt";

describe("Portable text component", () => {
  it("Render emphasis element", () => {
    render(<PortableTxt content={em} />);

    const emEl = screen.getByText("inline code");
    expect(emEl).toContainHTML(
      `<code class="rounded bg-darkblue/10 px-1">inline code</code>`
    );
  });

  it("Render H1 heading", () => {
    render(<PortableTxt content={h1} />);

    const h1El = screen.getByText("H1");
    expect(h1El).toContainHTML(`<h1 class="mb-10 text-center">H1</h1>`);
  });

  it("Render H2 heading", () => {
    render(<PortableTxt content={h2} />);

    const h2El = screen.getByText("H2");
    expect(h2El).toContainHTML(`<h2 class="mb-10">H2</h2>`);
  });

  it("Render span element", () => {
    render(<PortableTxt content={span} />);

    const spanEl = screen.getByText("Just a span");
    expect(spanEl).toContainHTML(`<p>Just a span</p>`);
  });

  it("Render strong element", () => {
    render(<PortableTxt content={strong} />);

    const strongEl = screen.getByText("Strong text");
    expect(strongEl).toContainHTML(`<strong>Strong text</strong>`);
  });

  it("Render underline element", () => {
    render(<PortableTxt content={underline} />);

    const ulStyle = screen.getByText("underline text");
    expect(ulStyle).toHaveStyle("text-decoration: underline");
  });

  describe("Images", () => {
    const imgsQty = images.images.length;

    it("Minimum of one image", () => {
      expect(imgsQty).toBeGreaterThanOrEqual(1);
    });

    it("Maximum of two images", () => {
      expect(imgsQty).toBeLessThanOrEqual(2);
    });

    it("Contains alternative text", () => {
      render(<PortableTxt content={images} />);
      const img = screen.getAllByRole("img")[0];
      expect(img).toHaveAttribute("alt");
    });
  });
});
