import { fireEvent, render, screen } from "@testing-library/react";
import { Tag } from "./Tag";

describe("Tag", () => {
  const label = "Example label";
  const onClick = jest.fn();

  it("renders the label and XMark button", () => {
    render(<Tag label={label} onClick={onClick} />);
    const span = screen.getByText(label);
    const button = screen.getByRole("button");

    expect(span).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("calls the onClick function when the button is clicked", () => {
    render(<Tag label={label} onClick={onClick} />);
    const button = screen.getByRole("button");

    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });

  it("sets the correct aria-label on the button", () => {
    render(<Tag label={label} onClick={onClick} />);
    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("aria-label", `Quitar ${label} de la lista`);
  });

  test.each(["", "   "])(
    "should return null if label is empty or full of spaces",
    (label) => {
      const { container } = render(<Tag label={label} onClick={onClick} />);
      expect(container).toBeEmptyDOMElement();
    }
  );
});
