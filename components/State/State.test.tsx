import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";

import { State } from "./State";

test("Disponible", () => {
  render(<State available={true} />);
  expect(screen.getByText(/disponible/i)).toBeInTheDocument();
});

test("Prestado", () => {
  render(<State available={false} />);
  expect(screen.getByText(/prestado/i)).toBeInTheDocument();
});
