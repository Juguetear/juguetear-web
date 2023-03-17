import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

  it("Should be a text with the text typed", async () => {
    render(<TextArea label="Example" helperText="helper" name="TextArea" />);

    const textarea = screen.getByLabelText("Example");
    await userEvent.type(textarea, "Hola Mundo");

    expect(textarea).toHaveValue("Hola Mundo");
  });
});
