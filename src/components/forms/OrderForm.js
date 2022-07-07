import React, { useState } from "react";
import { MdPerson, MdPhone, MdLocationOn } from "react-icons/md";
import { GoRequestChanges } from "react-icons/go";

function OrderForm() {
  const [state, setState] = useState({
    name: "",
    tel: "",
    address: "",
    request: "",
  });
  const handleChange= (e)=>{
    const {value, name}= e.target;
    setState((prevValues)=>{
      return {
        ...prevValues,
        [name]:value
       }
    })
  }
  console.log(state);

  const handleOrderSubmit = () => {};

  return (
    <form className="order-form" onSubmit={handleOrderSubmit}>
      <div className="form-item">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={state.name}
          onChange={handleChange}
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
          value={state.tel}
          onChange={handleChange}
          required
        />
        <span>
          <MdPhone />
        </span>
      </div>
      <div className="form-item">
        <input
          type="text"
          name="address"
          placeholder="Adresse"
          value={state.address}
          onChange={handleChange}
          required
        />
        <span>
          <MdLocationOn />
        </span>
      </div>
      <div className="form-item">
        <textarea
          name="request"
          placeholder="Sonderwünsch (optional)"
          rows="3"
          value={state.request}
          onChange={handleChange}
        />
        <span>
          <GoRequestChanges />
        </span>
      </div>
      <div className="submit">
        <button type="submit">Bestellen</button>
      </div>
    </form>
  );
}

export default OrderForm;
