import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Notification from "./Notification";

describe("Notification", () => {
  it("Component renders without crashing", () => {
    render(
      <Notification>
        <div>
          No tenemos juguetes disponibles en esta categoría. Volvé a intentarlo
          más tarde o mirá <span>todos los juguetes disponibles.</span>
        </div>
      </Notification>
    );
  });

  it("Component renders children", () => {
    const { getByText } = render(
      <Notification>
        <div>No tenemos juguetes...</div>
      </Notification>
    );
    expect(getByText("No tenemos juguetes...")).toBeTruthy();
  });
});
