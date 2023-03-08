import { render, screen } from "@testing-library/react";
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

  it("Check text label", () => {
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
      />
    );

    expect(screen.getByLabelText(/Example/i)).toBeInTheDocument();
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
