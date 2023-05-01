import { render, screen } from "@testing-library/react";
import { PortableTxt } from "./PortableTxt";
import body from "./data.json";

const mockedContent = body;

describe("PortableTxt", () => {
  it("Renders component", () => {
    render(<PortableTxt content={mockedContent.sections} />);
  });

  describe("Render correct content", () => {
    it("Heading", () => {
      render(<PortableTxt content={mockedContent.sections} />);
      expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
    });

    it("Image", () => {
      render(<PortableTxt content={mockedContent.sections} />);
      const image = screen.getByRole("img") as HTMLImageElement;
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute("src");
      expect(image).toHaveAttribute(
        "alt",
        "Persona modificando dinosaurio de juguete"
      );
    });

    describe("Links", () => {
      render(<PortableTxt content={mockedContent.sections} />);

      const [relLink, extLink, mailLink] = screen.getAllByRole(
        "link"
      ) as Array<HTMLLinkElement>;
      it("Hrefs", () => {
        // TEST: Improve test for relative url
        expect(relLink).toHaveAttribute("href", "/studio");
        expect(extLink).toHaveAttribute(
          "href",
          expect.stringContaining("https")
        );
        expect(mailLink).toHaveAttribute(
          "href",
          expect.stringContaining("mailto:")
        );
      });
    });

    describe("Lists", () => {
      render(<PortableTxt content={mockedContent.sections} />);

      const [ul, ol] = screen.getAllByRole("list");
      const itemsList = screen.getAllByRole("listitem") as Array<HTMLLIElement>;

      it("Unordered list", () => {
        expect(ul).toContainElement(itemsList[0]);
      });

      it("Ordered list", () => {
        expect(ol).toContainHTML("<li>First</li>");
      });
    });
  });
});
