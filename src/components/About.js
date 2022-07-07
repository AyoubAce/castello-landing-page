import React from "react";
import {GiFullPizza} from 'react-icons/gi'


function About() {
  return (
    <div className="about-us">
      <div className="about-us-container">
        <h2><GiFullPizza className="icon"/> Italian Restaurant</h2>
        <p>
          Im Herzen von Kamp-Lintfort eröffnen wir in Kürze das CASTELLO: ein
          Pizza & Pasta Tempel. Bei uns dreht sich fast alles um Teig, eine
          spezielle Mischung feinster Mehle, Hefe, Wasser, Salz und
          Olivenöl...machen unsere Gerichte zu einem Erlebniss.
        </p>
      </div>
    </div>
  );
}

export default About;
