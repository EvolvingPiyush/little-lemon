import { useState, useEffect } from "react";

function BookingForm({ availableTimes }) {

  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: 1,
    occasion: "Birthday"
  });

  const [error, setError] = useState("");

  useEffect(() => {
    const savedBooking = localStorage.getItem("booking");

    if (savedBooking) {
      setFormData(JSON.parse(savedBooking));
    }
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!formData.date || !formData.time) {
      setError("Please select a date and time");
      return;
    }

    if (formData.guests < 1 || formData.guests > 10) {
      setError("Guests must be between 1 and 10");
      return;
    }

    setError("");

    localStorage.setItem("booking", JSON.stringify(formData));

    alert("Booking saved successfully!");
  }

  return (
    <form onSubmit={handleSubmit}>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <label htmlFor="date">Choose date</label>
      <input
        type="date"
        id="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
      />

      <label htmlFor="time">Choose time</label>
      <select
        id="time"
        name="time"
        value={formData.time}
        onChange={handleChange}
      >

        <option value="">Select time</option>

        {availableTimes.map((time) => (
          <option key={time}>{time}</option>
        ))}

      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        name="guests"
        min="1"
        max="10"
        value={formData.guests}
        onChange={handleChange}
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        name="occasion"
        value={formData.occasion}
        onChange={handleChange}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <button type="submit">
        Book Table
      </button>

    </form>
  );
}

export default BookingForm;