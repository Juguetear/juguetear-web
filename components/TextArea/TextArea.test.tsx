import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event/";
import { ChangeEvent } from "react";
import TextArea from "./TextArea";

describe("TextArea", () => {
  it("Should render the component", () => {
    let value = "";

    const handleChange = ({ target }: ChangeEvent<HTMLTextAreaElement>) => {
      value = target.value;
    };

    render(
      <TextArea
        label="Example"
        value={value}
        onChange={handleChange}
        helperText="helper"
        name=""
      />
    );
  });

  it("Should be a text with the text typed ", async () => {
    let value = "";

    const handleChange = ({ target }: ChangeEvent<HTMLTextAreaElement>) => {
      value = value + target.value;
    };

    render(
      <TextArea
        label="Example"
        value={value}
        onChange={handleChange}
        helperText="helper"
        name="TextArea"
      />
    );

    const textarea = screen.getByLabelText(/Example/i);
    await userEvent.type(textarea, "Hola Mundo");

    expect(textarea).toBeInTheDocument();
    expect(value).toBe("Hola Mundo");
  });

  it("Should be a textarea with the error prop", () => {
    let value = "";

    const handleChange = ({ target }: ChangeEvent<HTMLTextAreaElement>) => {
      value = target.value;
    };

    render(
      <TextArea
        label="error"
        value={value}
        onChange={handleChange}
        helperText="helper"
        name="TextArea"
        error
      />
    );

    const errorMessage = screen.getByText(/helper/i);

    expect(errorMessage).toHaveClass("visible");
    expect(errorMessage).toBeInTheDocument();
  });

  it("Should be a textarea with the required prop", () => {
    let value = "";

    const handleChange = ({ target }: ChangeEvent<HTMLTextAreaElement>) => {
      value = target.value;
    };

    render(
      <TextArea
        label="Example"
        value={value}
        onChange={handleChange}
        helperText="helper"
        name="TextArea"
        required
      />
    );

    const textarea = screen.getByLabelText(/Example/i);
    expect(textarea).toBeRequired();
  });
});
