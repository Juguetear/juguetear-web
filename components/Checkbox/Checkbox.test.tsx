import { fireEvent, render, screen } from "@testing-library/react";
import { Checkbox } from "./Checkbox";

describe("Checkbox", () => {
  const defaultProps = {
    defaultChecked: false,
    label: "Checkbox Label",
    id: "checkbox",
  };

  it("renders the label and checkbox", () => {
    render(<Checkbox {...defaultProps} />);
    const checkbox = screen.getByRole("checkbox");
    const label = screen.getByLabelText("Checkbox Label");

    expect(checkbox).toBeInTheDocument();
    expect(label).toBeInTheDocument();
  });

  it("handles changes in checkbox state", () => {
    render(<Checkbox {...defaultProps} />);
    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).not.toBeChecked();

    fireEvent.click(checkbox);

    expect(checkbox).toBeChecked();
  });

  it("renders with a default checked state", () => {
    render(<Checkbox {...defaultProps} defaultChecked />);
    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).toBeChecked();
  });

  it("renders with a default disabled state", () => {
    render(<Checkbox {...defaultProps} disabled />);
    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).toBeDisabled();
  });

  it("does not render when label is not provided", () => {
    render(<Checkbox {...defaultProps} label="" />);
    const checkbox = screen.queryByRole("checkbox");

    expect(checkbox).not.toBeInTheDocument();
  });
});
