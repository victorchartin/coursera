import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

test("Have Special Dishes", () => {
  // render the App component
  render(<App />, { wrapper: MemoryRouter });

  // save the specialDishes in a variable
  const specialDishes = screen.getByTestId("special-dishes");

  // test assumption
  expect(specialDishes).toBeDefined();
});
