import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";
import { Tag } from "./Tag";

describe("Tag", () => {
  const label = "Example label";
  test("renders the label and XMark button", () => {
    const { getByText, getByRole } = render(
      <Tag label={label} onClick={() => {}} />
    );
    const span = getByText(label);
    const button = getByRole("button");

    expect(span).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test("calls the onClick function when the button is clicked", () => {
    const onClick = jest.fn();
    const { getByRole } = render(<Tag label={label} onClick={onClick} />);
    const button = getByRole("button");

    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });

  test("sets the correct aria-label on the button", () => {
    const { getByRole } = render(<Tag label={label} onClick={() => {}} />);
    const button = getByRole("button");
    expect(button).toHaveAttribute("aria-label", `Quitar ${label} de la lista`);
  });

  test("should not be rendered if the label prop is empty", () => {
    const { container } = render(<Tag label="" onClick={() => {}} />);
    expect(container.firstChild).toBeNull();
  });
});
