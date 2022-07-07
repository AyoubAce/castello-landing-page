import React, { useLayoutEffect } from 'react'
import CateringService from '../components/CateringService'
import Delivery from '../components/Delivery'
import Featured from '../components/Featured'
import Hero from '../components/Hero'


function Home() {
 
  useLayoutEffect(() => {
    window.scrollTo(0,0)
    }, [])

  return (
    <section className='home'>
        <Hero />
        <Featured />
        <CateringService />
        <Delivery/>

    </section>
  )
}

export default Home