import { render, screen } from "@testing-library/react";
import TextArea from "./TextArea";

describe("TextArea", () => {
  it("Should render the component", () => {
    render(<TextArea label="Example" helperText="helper" name="" />);
  });

  it("Should be a textarea with the error prop", () => {
    render(
      <TextArea label="error" helperText="helper" name="TextArea" error />
    );

    const errorMessage = screen.getByText(/helper/i);

    expect(errorMessage).toHaveClass("visible");
    expect(errorMessage).toBeInTheDocument();
  });

  it("Should be a textarea with the required prop", () => {
    render(
      <TextArea label="Example" helperText="helper" name="TextArea" required />
    );

    const textarea = screen.getByLabelText(/Example/i);
    expect(textarea).toBeRequired();
  });
});
