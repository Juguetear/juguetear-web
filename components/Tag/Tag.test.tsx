import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

  it("calls the onClick function when the button is clicked", async () => {
    render(<Tag label={label} onClick={onClick} />);
    const button = await screen.findByRole("button");

    await userEvent.click(button);

    expect(onClick).toHaveBeenCalled();
  });

  it("sets the correct aria-label on the button", () => {
    render(<Tag label={label} onClick={onClick} />);
    const button = screen.getByRole("button", {
      name: `Quitar ${label} de la lista`,
    });
    expect(button).toHaveAttribute("aria-label", `Quitar ${label} de la lista`);
  });

  it.each(["", "   "])(
    "should return null if label is empty or full of spaces",
    (label) => {
      render(<Tag label={label} onClick={onClick} />);
      const text = screen.queryByText(`Quitar ${label} de la lista`);
      expect(text).not.toBeInTheDocument();
    }
  );
});
