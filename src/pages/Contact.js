import React, { useLayoutEffect } from 'react'
import ContactForm from '../components/forms/ContactForm'
import Map from "../components/Map"

function Contact() {
  useLayoutEffect(() => {
    window.scrollTo(0,0)
    }, [])

  return (
    <section className='contact-page'>
        <div className='contact-container'>
        <h1>Kontakt zu uns</h1>
        <ContactForm />
        <div>
        <Map/>
        </div>
        </div>
    </section>
  )
}

export default Contact