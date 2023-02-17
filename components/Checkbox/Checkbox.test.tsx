import "@testing-library/jest-dom/extend-expect";

import { fireEvent, render } from "@testing-library/react";
import { Checkbox } from "./Checkbox";

describe("Checkbox", () => {
  const defaultProps = {
    defaultChecked: false,
    label: "Checkbox Label",
    id: "checkbox",
  };

  it("renders the label and checkbox", () => {
    const { getByLabelText, getByRole } = render(
      <Checkbox {...defaultProps} />
    );
    const checkbox = getByRole("checkbox");
    const label = getByLabelText("Checkbox Label");

    expect(checkbox).toBeInTheDocument();
    expect(label).toBeInTheDocument();
  });

  it("handles changes in checkbox state", () => {
    const { getByRole } = render(<Checkbox {...defaultProps} />);
    const checkbox = getByRole("checkbox");

    expect(checkbox).not.toBeChecked();

    fireEvent.click(checkbox);

    expect(checkbox).toBeChecked();
  });

  it("renders with a default checked state", () => {
    const { getByRole } = render(<Checkbox {...defaultProps} defaultChecked />);
    const checkbox = getByRole("checkbox");

    expect(checkbox).toBeChecked();
  });

  it("renders with a default disabled state", () => {
    const { getByRole } = render(<Checkbox {...defaultProps} disabled />);
    const checkbox = getByRole("checkbox");

    expect(checkbox).toBeDisabled();
  });

  it("does not render when label is not provided", () => {
    const { queryByRole } = render(<Checkbox {...defaultProps} label="" />);
    const checkbox = queryByRole("checkbox");

    expect(checkbox).not.toBeInTheDocument();
  });
});
