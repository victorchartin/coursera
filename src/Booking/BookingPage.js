import "../App.css";
import BookingForm from "./BookingForm";
import { useReducer } from "react";

export function BookingPage() {
  const seededRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
      return (s = (s * a) % m) / m;
    };
  };

  const fetchAPI = function (date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ":00");
      }
      if (random() < 0.5) {
        result.push(i + ":30");
      }
    }
    return result;
  };
  // const submitAPI = function (formData) {
  //   return true;
  // };

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTime());

  return (
    <div>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
      ></BookingForm>
    </div>
  );
  function initializeTime() {
    const today = new Date();
    const availableTimes = fetchAPI(today);
    return availableTimes;
  }
  function updateTimes(state, action) {
    return fetchAPI(action);
  }
}

export default BookingPage;
