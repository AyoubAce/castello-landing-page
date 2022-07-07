import React, { useState } from "react";
import {
  MdPerson,
  MdPhone,
  MdOutlineEmail,
  MdOutlineAccessTime,
  MdPeople,
} from "react-icons/md";
import { GoRequestChanges } from "react-icons/go";

function BookingForm() {
  const [state, setState] = useState({
    date: "",
    time: "",
    person: "2 Personen",
    name: "",
    tel: "",
    email:"",
    request: "",
  });

  const time = [
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
  ];
  const person = [
    "1 Person",
    "2 Personen",
    "3 Personen",
    "4 Personen",
    "5 Personen",
    "6 Personen",
    "7 Personen",
    "8 Personen",
    "9 Personen",
    "10 Personen",
  ];
  const handleChange = (e) => {
    const { value, name } = e.target;
    setState((prevValues) => {
      return {
        ...prevValues,
        [name]: value,
      };
    });
  };

  console.log(state);

  const handleOrderSubmit = () => {};
  return (
    <form onSubmit={handleOrderSubmit} className="booking-form">
      <div className="booking-time">
        <div className="form-item booking-time-item">
          <input type="date" name="date" value={state.date} onChange={handleChange} required />
          {/* <span>
            <BsFillCalendarDayFill />
          </span> */}
        </div>
        <div className="form-item booking-time-item">
          <select name="time" value={state.time} onChange={handleChange} required>
            {time.map((item, index) => {
              return (
                <option key={index} >
                  {item}
                </option>
              );
            })}
          </select>
          <span>
            <MdOutlineAccessTime />
          </span>
        </div>

        <div className="form-item booking-time-item">
          <select
            name="person"
            value={state.person} onChange={handleChange}
            required
          >
            {person.map((item, index) => {
              return (
                <option key={index} >
                  {item}
                </option>
              );
            })}
          </select>
          <span>
            <MdPeople />
          </span>
        </div>
      </div>

      <div className="form-item">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={state.name} onChange={handleChange}
          required
        />
        <span>
          <MdPerson />
        </span>
      </div>
      <div className="form-item">
        <input
          type="tel"
          name="tel"
          placeholder="Handy Nummer"
          value={state.tel} onChange={handleChange}
          required
        />
        <span>
          <MdPhone />
        </span>
      </div>
      <div className="form-item">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={state.email} onChange={handleChange}
          required
        />
        <span>
          <MdOutlineEmail />
        </span>
      </div>
      <div className="form-item">
        <textarea
          name="request"
          placeholder="Sonderwünsch (optional)"
          rows="3"
          value={state.request} onChange={handleChange}
        />
        <span>
          <GoRequestChanges />
        </span>
      </div>
      <div className="submit">
        <button type="submit">Reservieren</button>
      </div>
    </form>
  );
}

export default BookingForm;
