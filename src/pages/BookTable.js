import React, { useLayoutEffect } from 'react'
import BookingForm from "../components/forms/BookingForm";
import { MdOutlineAccessTime, MdPhone } from "react-icons/md";
export default function BookTable() {
  useLayoutEffect(() => {
    window.scrollTo(0,0)
    }, [])

  return (
    <section className="booking-page">
      <div className="booking-description">
        <h1>Bei uns reservieren</h1>
        <p>
          Bei Reservierungen für mehr als 10 Personen rufen Sie uns bitte an.
        </p>
        <p>
          <MdPhone className="icon" />
          <span>028429098440</span>
        </p>
      </div>

      <div className="booking-container">
        <BookingForm />
        <div className="booking-header">
          <div className="overlay">
            <p>
              <MdOutlineAccessTime className="icon" /> <br /> Mo-Fr 11:30-22:00{" "}
              <br /> Sa-So 11:30-23:00
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
