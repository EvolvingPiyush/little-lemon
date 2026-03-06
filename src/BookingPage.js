import { useReducer } from "react";
import BookingForm from "./components/BookingForm";

const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00"];
};

function updateTimes(state, action) {
  return initializeTimes();
}

function BookingPage() {

  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  return (
    <main>
      <h2>Reserve a Table</h2>

      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
      />

    </main>
  );
}

export default BookingPage;