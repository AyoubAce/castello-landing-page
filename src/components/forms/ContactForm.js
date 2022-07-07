import React, { useState } from 'react'
import { MdPerson, MdPhone,MdOutlineEmail,MdOutlineMessage } from "react-icons/md";


function ContactForm() {
    const [state, setState]= useState({
        name:"",
        email:"",
        tel:"",
        message:""
    })
    const handleOrderSubmit =(e)=>{
      e.preventDefault()


    }
    const handleChange = (e) => {
      const { value, name } = e.target;
      setState((prevValues) => {
        return {
          ...prevValues,
          [name]: value,
        };
      });
    };
  
  return (
    <form onSubmit={handleOrderSubmit} className="contact-form">
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
          value={state.email}
          onChange={handleChange}
          required
        />
        <span>
          <MdOutlineEmail/>
        </span>
      </div>

      <div className="form-item">
        <textarea
          name="message"
          placeholder="Nachricht"
          rows="3"
          value={state.message}
          onChange={handleChange}
        />
        <span>
          <MdOutlineMessage/>
        </span>
      </div>
      <div className="submit">
        <button type="submit">Kontakt</button>
      </div>
    </form>
  )
}

export default ContactForm