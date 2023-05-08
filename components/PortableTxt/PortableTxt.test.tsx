import { render, screen } from "@testing-library/react";
import { PortableTxt } from "./PortableTxt";
import mockedData from "./mockedData.json";

describe("Portable text component", () => {
  describe("Headings", () => {
    it("Render heading lvl 2", () => {
      render(<PortableTxt content={mockedData.description} />);
      const h2El = screen.getAllByRole("heading", { level: 2 })[0];
      expect(h2El).toBeInTheDocument();
    });
    it("Render heading lvl 3", () => {
      render(<PortableTxt content={mockedData.description} />);
      const h3El = screen.getByRole("heading", { level: 3 });
      expect(h3El).toBeInTheDocument();
    });
  });

  it("Render emphasis", () => {
    render(<PortableTxt content={mockedData.description} />);
    const emEl = screen.getByText("solidaria");
    expect(emEl).toContainHTML(
      `<em class="font-semibold text-blue">solidaria</em>`
    );
  });

  it("Render strong", () => {
    render(<PortableTxt content={mockedData.description} />);
    const strongEl = screen.getByText("naturaleza");
    expect(strongEl).toContainHTML(`<strong>naturaleza</strong>`);
  });

  it("Render underline", () => {
    render(<PortableTxt content={mockedData.description} />);
    const ulStyle = screen.getByText("idea");
    expect(ulStyle).toHaveStyle("text-decoration: underline");
  });

  describe("Image", () => {
    it("Has alternative text", () => {
      render(<PortableTxt content={mockedData.description} />);
      const imgEl = screen.getAllByRole("img")[0];
      expect(imgEl).toHaveAttribute(
        "alt",
        "Persona modifcando dinosaurio de juguete"
      );
    });
  });
});
