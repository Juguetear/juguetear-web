import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";
import Tag from "./Tag";

describe("Tag", () => {
  test("renders the label and XMark button", () => {
    const label = "Example label";
    const { getByText, getByRole } = render(
      <Tag label={label} onClick={() => {}} />
    );
    const span = getByText(label);
    const button = getByRole("button");

    expect(span).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test("calls the onClick function when the button is clicked", () => {
    const label = "Example label";
    const onClick = jest.fn();
    const { getByRole } = render(<Tag label={label} onClick={onClick} />);
    const button = getByRole("button");

    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });

  test("sets the correct aria-label on the button", () => {
    const label = "Example label";
    const { getByRole } = render(<Tag label={label} onClick={() => {}} />);
    const button = getByRole("button");
    expect(button).toHaveAttribute("aria-label", `Quitar ${label} de la lista`);
  });
});
