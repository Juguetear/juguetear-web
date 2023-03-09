import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event/";
import { ChangeEvent } from "react";
import TextArea from "./TextArea";

describe("TextArea", () => {
  it("Component renders without crashing", () => {
    let value = "";

    const handleChange = ({ target }: ChangeEvent<HTMLTextAreaElement>) => {
      value = target.value;
    };

    render(
      <TextArea
        label="texto"
        value={value}
        onChange={handleChange}
        helperText="helper"
        name=""
      />
    );
  });

  it("Check text label", async () => {
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

  it("Check TextArea with error prop", () => {
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

  it("Check TextArea with required prop", () => {
    let value = "";

    const handleChange = ({ target }: ChangeEvent<HTMLTextAreaElement>) => {
      value = target.value;
    };

    render(
      <TextArea
        label="required"
        value={value}
        onChange={handleChange}
        helperText="helper"
        name="TextArea"
        required
      />
    );

    expect(screen.getByLabelText(/ */i)).toBeInTheDocument();
  });
});
