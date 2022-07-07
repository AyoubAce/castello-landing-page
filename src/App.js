import React, {  useEffect, useState } from "react";
import {Route, Routes} from "react-router-dom"
import AOS from "aos";
import "aos/dist/aos.css";
import BookTable from "./pages/BookTable";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Order from "./pages/Order";
import Footer from "./parts/Footer";
import Navbar from "./parts/Navbar";
import Intro from "./components/Intro";
import Galerie from "./pages/Galerie";


function App() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once:true,
    });
    AOS.refresh();
  }, []);
  document.querySelectorAll('*').forEach(el => {
    if (el.offsetWidth > document.documentElement.offsetWidth) {
        console.log('Found the worst element ever: ', el);
    }
  });
  // A fake PROMISE() to show an animated logo when the page loads.
  // const [stare,setStare]=useState(true)
  // useEffect(() => {
  //   fakePromiseCall().then(() => {
  //     setStare(false);
  //   });
  // });
  // function fakePromiseCall() {
  //   return new Promise((resolve) => setTimeout(() => resolve(), 1000));
  // }
  // // show Intro component until Promise resolves
  // if(stare){

  //  return <Intro stare={stare}/>
  // }
  return (
    
    <div className="App">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/menu" element={<Menu/>} />
      <Route path="/order" element={<Order/>} />
      <Route path="/reservieren" element={<BookTable />} />
      <Route path="/galerie" element={<Galerie />} />
      <Route path="/kontakt" element={<Contact />} />
    </Routes>
    <Footer/>
    </div>
  
  );
}

export default App;
