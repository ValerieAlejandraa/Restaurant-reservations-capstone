import React from "react";
import { useHistory } from "react-router-dom";



// reservation form : handles form submission or cancel 
function ReservationForm({ reservation, setReservation, submitHandler }) {
  const history = useHistory();

  function changeHandler({ target: { name, value } }) {
    setReservation((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  // # of people input
  function changeHandlerNumber({ target: { name, value } }) {
    setReservation((prevState) => ({
      ...prevState,
      [name]: Number(value),
    }));
  }

  return (
    <form onSubmit={submitHandler}>
      <p> We look forward to your arrival! </p>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">First Name:</label>
        <div className="col-sm-10">
          <input
            name="first_name"
            value={reservation.first_name}
            onChange={changeHandler}
          />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Last Name:</label>
        <div className="col-sm-10">
          <input
            name="last_name"
            value={reservation.last_name}
            onChange={changeHandler}
          />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Phone Number:</label>
        <div className="col-sm-10">
          <input
            name="mobile_number"
            type="tel"
            pattern="[0-9\-]+"
            value={reservation.mobile_number}
            onChange={changeHandler}
          />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Date of Reservation:</label>
        <div className="col-sm-10">
          <input
            name="reservation_date"
            type="date"
            value={reservation.reservation_date}
            onChange={changeHandler}
          />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Time of Reservation:</label>
        <div className="col-sm-10">
          <input
            name="reservation_time"
            type="time"
            value={reservation.reservation_time}
            onChange={changeHandler}
          />
          <small className="col-sm-2">
            Reservation hours are between 10:30 am and 9:30 pm{" "}
          </small>
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Number of People:</label>
        <div className="col-sm-10">
          <input
            name="people"
            type="number"
            min={1}
            value={reservation.people}
            onChange={changeHandlerNumber}
          />
        </div>
      </div>
      <button type="submit">Submit</button>
      <button type="button" onClick={history.goBack}>
        Cancel
      </button>
    </form>
  );
}

export default ReservationForm;
