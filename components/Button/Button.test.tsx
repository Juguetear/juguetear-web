import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { Button } from "./Button";

describe("Button", () => {
  it("Component renders without crashing", () => {
    render(
      <Button handleClick={jest.fn()} appearance={"button"} text={"button"} />
    );
  });

  it("Button is correctly aria labeled", () => {
    const { getByRole } = render(
      <Button handleClick={jest.fn()} appearance={"button"} text={"test"} />
    );
    expect(getByRole("button", { name: "test" })).toBeInTheDocument();
  });

  it("HandleClick is run on button click", () => {
    const handleClick = jest.fn();
    const { getByRole } = render(
      <Button handleClick={handleClick} appearance={"button"} text={"test"} />
    );
    const button = getByRole("button");
    act(() => {
      fireEvent.click(button);
    });
    expect(handleClick).toHaveBeenCalled();
  });

  it("HandleClick is not run click when button is disabled", () => {
    const handleClick = jest.fn();
    const { getByRole } = render(
      <Button
        handleClick={handleClick}
        disabled={true}
        appearance={"button"}
        text={"test"}
      />
    );
    const button = getByRole("button");
    act(() => {
      fireEvent.click(button);
    });
    expect(handleClick).not.toHaveBeenCalled();
  });
});
