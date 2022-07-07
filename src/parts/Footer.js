import React from "react";
import { Link } from "react-router-dom";
import {
  MdFacebook,
  MdAlternateEmail,
  MdPhone,
  MdLocationPin,
} from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";

function Footer() {
  return (
    <footer>
    <div className="logo">
      <img src="./assets/castello_logo.png" alt="logo" ></img>
    </div>

      <div className="contact-info">
      <h4 >Kontaktiere uns:</h4>
        <p>
          <MdAlternateEmail /> <span>info@castello-kamp-lintfort.de</span>
        </p>
        <p>
          <MdPhone /> <span>028429098440</span>
        </p>
        <p>
          <MdLocationPin /> <span>Friedrichstr. 13, 47475 Kamp-Lintfort</span>
        </p>
      </div>

      <div className="follow-us">
        <h4>Folge uns auf:</h4>
        <a href="https://www.facebook.com/Castello-Pizzeria-Nudelhaus-105974388503299" target="_blank"  rel='noreferrer' style={{color:"#333"}} >
        <MdFacebook className="social-media"/>
        </a> 
       <a href='https://www.instagram.com/castellopizzerianudelhaus/?msclkid=3805adfbc79f11ecb20721d45f09ba1e' target='_blank' rel='noreferrer'  style={{color:"#333"}} > 
       <AiFillInstagram className="social-media"/>
       </a>
      </div>

      <div className="copyright-impressum">
        <p>
          {" "}
          &copy; {new Date().getFullYear()} CASTELLO -Pizzeria & Nudelhaus Kamp
          Lintfort -{" "}
          <Link to="/impressum-datenschutz">Impressum/Datenschutz</Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
