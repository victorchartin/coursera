import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BookingForm from "./BookingForm";

test("Have Special Dishes", () => {
  // render the App component
  render(<BookingForm />, { wrapper: MemoryRouter });

  // save the reservationForm in a variable
  const reservationForm = screen.getByTestId("reservation-form");

  // test assumption
  expect(reservationForm).toBeDefined();
});
