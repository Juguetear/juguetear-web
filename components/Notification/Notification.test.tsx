import { render, screen } from "@testing-library/react";
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
    render(
      <Notification>
        <p>No tenemos juguetes...</p>
      </Notification>
    );

    const children = screen.getByText("No tenemos juguetes...");
    expect(children).toBeInTheDocument();
  });
});
