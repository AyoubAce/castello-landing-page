import React from "react";
import { MdLocationPin, MdPhone, MdOutlineAccessTime } from "react-icons/md";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <header className="hero">
      <div className="video-player">
        <video className="video" playsInline autoPlay loop muted>
          <source src="./assets/pizza.webm" type="video/webm" />
          <source src="./assets/pizza-main.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="hero-container">
        <div className="hero-content">
          <div className="logo">
            <img src="./assets/castello_logo.png" alt="" />
          </div>
          <div className="title-description">
            <h1>Der Geschmack Italiens</h1>
            {/* <p>
              Im Herzen von Kamp-Lintfort eröffnen wir in Kürze das CASTELLO:
              ein Pizza & Pasta Tempel. Bei uns dreht sich fast alles um Teig,
              eine spezielle Mischung feinster Mehle, Hefe, Wasser, Salz und
              Olivenöl...machen unsere Gerichte zu einem Erlebniss.
            </p> */}
          </div>
          <div className="reserve-order">
            <Link to="/reservieren" className="btn ">
              Tisch reservieren
            </Link>
            {/* <Link to="/menu" className="btn btn-menu">
              Jetzt bestellen
            </Link> */}
          </div>
          <div className="location-info">
            <span className="info">
              <MdLocationPin className="icon" />
              Friedrichstr. 13, 47475 Kamp-Lintfort
            </span>
            <span className="info">
              <MdPhone className="icon" />
              028429098440
            </span>
            <span className="info">
              <MdOutlineAccessTime className="icon" />
              Mo-Fr 11:30-22:00 <br /> Sa-So 11:30-23:00
            </span>
          </div>
        </div>
      </div>
      <div className="shadow">
        <p style={{ display: "none" }}>Italien Restaurant</p>
      </div>
    </header>
  );
}

export default Hero;
