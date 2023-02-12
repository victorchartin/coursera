import { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

function BookingForm(props) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/confirmed-booking");
  }
  const availableTimes = props.availableTimes.map((time) => {
    return <option key={time}>{time}</option>;
  });

  return (
    <div className="booking-page">
      <h1>Book a table</h1>
      <form
        data-testid="reservation-form"
        className="reservation-form"
        onChange={formValueChanged}
      >
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          onChange={formValueChanged}
          value={date}
        />
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" onChange={formValueChanged} value={time}>
          {availableTimes}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          onChange={formValueChanged}
          value={guests}
        />
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" onChange={formValueChanged} value={occasion}>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input
          type="submit"
          value="Make Your reservation"
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
  function formValueChanged(event) {
    if (event.target.id === "res-date") {
      setDate(event.target.value);
      props.dispatch(new Date(event.target.value));
    } else if (event.target.id === "res-time") {
      setTime(event.target.value);
    } else if (event.target.id === "guests") {
      setGuests(event.target.value);
    } else if (event.target.id === "occasion") {
      setOccasion(event.target.value);
    }
  }
}

export default BookingForm;
