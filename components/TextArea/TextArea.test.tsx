import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
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

    const { getByLabelText } = render(
      <TextArea
        label="Example"
        value={value}
        onChange={handleChange}
        helperText="helper"
        name="TextArea"
      />
    );

    expect(getByLabelText(/Example/i)).toBeInTheDocument();
  });

  it("Check TextArea with error prop", () => {
    let value = "";

    const handleChange = ({ target }: ChangeEvent<HTMLTextAreaElement>) => {
      value = target.value;
    };

    const { container, getByText } = render(
      <TextArea
        label="error"
        value={value}
        onChange={handleChange}
        helperText="helper"
        name="TextArea"
        error
      />
    );

    expect(container.getElementsByClassName("text-red").length).toBe(2);
    expect(getByText(/helper/i)).toBeInTheDocument();
  });

  it("Check TextArea with required prop", () => {
    let value = "";

    const handleChange = ({ target }: ChangeEvent<HTMLTextAreaElement>) => {
      value = target.value;
    };

    const { getByLabelText } = render(
      <TextArea
        label="required"
        value={value}
        onChange={handleChange}
        helperText="helper"
        name="TextArea"
        required
      />
    );

    expect(getByLabelText(/ */i)).toBeInTheDocument();
  });
});
