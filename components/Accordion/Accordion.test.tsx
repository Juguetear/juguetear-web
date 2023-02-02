import "@testing-library/jest-dom/extend-expect";
import { act, fireEvent, render, screen } from "@testing-library/react";

import { Accordion } from "./Accordion";

test("Accordion click text render", () => {
  render(
    <Accordion title="¿Hay que pagar para usar los juguetes?">
      <p>No, el prestamo es sin costo alguno.</p>
    </Accordion>
  );

  const accordeonElement = screen.getByText(
    "¿Hay que pagar para usar los juguetes?"
  );

  act(() => {
    fireEvent.click(accordeonElement);
  });

  expect(
    screen.getByText("No, el prestamo es sin costo alguno.")
  ).toBeInTheDocument();
});
