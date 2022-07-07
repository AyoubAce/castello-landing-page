import React, { useState } from "react";
import { MdMenu, MdOutlineRestaurantMenu } from "react-icons/md";
import { NavLink as Link, useLocation } from "react-router-dom";
function Navbar() {
  const [clicked, setClicked] = useState(false);

  //to style active link
  const location = useLocation();
  const splitLocation = location.pathname.split("/");


  const burgerClick = () => {
    setClicked(!clicked);
  };

  return (
    <header className="navbar">
      <div className="logo-container">
        <Link to="/">
          <img src="./assets/cast-logo.png" alt="logo" className="logo"></img>
        </Link>
      </div>
      <span onClick={burgerClick} className="burger-menu">
        {clicked ? (
          <MdOutlineRestaurantMenu className="burger" />
        ) : (
          <MdMenu className="burger" />
        )}
      </span>
      <nav>
        <ul className={clicked ? "nav-list nav-active" : "nav-list "}>
          <Link to="/">
            <li
              className={splitLocation[1] === "" ? "btn active" : "btn"}
              onClick={() => setClicked(false)}
            >
              Home
            </li>
          </Link>
          <Link to="/menu">
            <li
              className={splitLocation[1] === "menu" ? "btn active" : "btn"}
              onClick={() => setClicked(false)}
            >
              Spiesekarte
            </li>
          </Link>
          <Link to="/reservieren">
            <li
              className={
                splitLocation[1] === "reservieren" ? "btn active" : "btn"
              }
              onClick={() => setClicked(false)}
            >
              Reservieren
            </li>
          </Link>
          <Link to="/galerie">
            <li
              className={splitLocation[1] === "galerie" ? "btn active" : "btn"}
              onClick={() => setClicked(false)}
            >
              Galerie
            </li>
          </Link>
          <Link to="/kontakt">
            <li
              className={splitLocation[1] === "kontakt" ? "btn active" : "btn"}
              onClick={() => setClicked(false)}
            >
              Kontakt
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
export default Navbar;
