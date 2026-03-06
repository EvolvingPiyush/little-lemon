import { render, screen } from "@testing-library/react";
import BookingForm from "../components/BookingForm";

test("renders booking form label", () => {
  render(<BookingForm availableTimes={[]} />);
  
  const labelElement = screen.getByText(/Choose date/i);

  expect(labelElement).toBeInTheDocument();
});