//create a new reservation when a customer calls
//so that I know how many customers will arrive at the restaurant on a given day.

import React, { useState } from "react";
import { useHistory } from "react-router";
import ErrorAlert from "../ErrorAlert"; //error boundary

//filling and submitting form creates a new reservation and then displays the dashboard for the reservation date
//canceling form returns to previous page 
import { createReservation } from "../../utils/api"
import ReservationForm from "./ReservationForm"

function NewReservation() {
    const history = useHistory();
    const initial = {
      first_name: "",
      last_name: "",
      mobile_number: "",
      people: 1,
      reservation_date: "",
      reservation_time: ""
    }
}

const [reservation, setReservation] = useState(initial)
const [showError, setShowError] = useState(null)

function submitHandler(event){
    event.preventDefault();
    createReservation(reservation)
        .then((createdReservation) => {
            const res_date = 
                 createdReservation.reservation_date.match(/\d{4}-\d{2}-\d{2}/)[0];
            history.push(`/dashboard?date=` + res_date);
        })
        .catch(setShowError)
}

return (
    <main>
        <ErrorAlert error={error} />
        <h1>Create a New Reservation</h1>
        <ReservationForm
           reservation={reservation}
           setReservation={setReservation}
           submitHandler={submitHandler}
        />
    </main>
)



export default NewReservation;