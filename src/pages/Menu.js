import axios from "axios";
import React, { useContext, useEffect, useState, useLayoutEffect } from "react";
import Dish from "../components/Dish";
import food from "../food.png";
import CastelloContext from "../Context/Context";
import { MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

const URL = "https://castmernapp.herokuapp.com/api/menu";

function Menu() {
  const { basket } = useContext(CastelloContext);
  const [menu, setMenu] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => {
    window.scrollTo(0,0)
    }, [])

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    await axios
      .get(URL)
      .then((res) => {
        setMenu(res.data);
        setIsLoading(false)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if(isLoading){
    return <Loading/>
  }

  return (
    <section className="menu">
    <div className="menu-header">
      <h1>Speisekarte</h1>
      <p>Consectetur sunt adipisicing quis culpa ex aliquip nisi.</p>
    </div>
      <div className="menu-container">
        <div className="vorspeisen menu-item">
        <div className="menu-item-header" style={{ backgroundImage: `url(${food})` }}>
          <h3 >Vorspeisen</h3>
        </div>
          {menu?.map((item, index) => {
            return (
              item.category === "Vorspeisen" && <Dish key={index} item={item} />
            );
          })}
        </div>
        <div className="salate menu-item">
        <div className="menu-item-header" style={{ backgroundImage: `url(${food})` }}>
          <h3 >Salate</h3>
        </div>
          {menu?.map((item, index) => {
            return (
              item.category === "Salate" && <Dish key={index} item={item} />
            );
          })}
        </div>
        <div className="wraps menu-item">
        <div className="menu-item-header" style={{ backgroundImage: `url(${food})` }}>
          <h3 >Wraps</h3>
        </div>
          <p className="description">mit hausgemachtem Castello Brot</p>
          {menu?.map((item, index) => {
            return (
              item.category === "Wraps" && <Dish key={index} item={item} />
            );
          })}
        </div>
        <div className="pizzabrotchen menu-item">
        <div className="menu-item-header" style={{ backgroundImage: `url(${food})` }}>
          <h3 >Pizzabrötchen</h3>
        </div>
          {menu?.map((item, index) => {
            return (
              item.category === "Pizzabrötchen" && (
                <Dish key={index} item={item} />
              )
            );
          })}
        </div>
        <div className="pasta menu-item">
        <div className="menu-item-header" style={{ backgroundImage: `url(${food})` }}>
          <h3 >Pasta</h3>
        </div>
          {menu?.map((item, index) => {
            return (
              item.category === "Pasta" && <Dish key={index} item={item} />
            );
          })}
        </div>
        <div className="pizza menu-item">
        <div className="menu-item-header" style={{ backgroundImage: `url(${food})` }}>
          <h3 >Pizza</h3>
        </div>
          {menu?.map((item, index) => {
            return (
              item.category === "Pizza" && <Dish key={index} item={item} />
            );
          })}
        </div>
        <div className="fisch menu-item">
        <div className="menu-item-header" style={{ backgroundImage: `url(${food})` }}>
          <h3 >Fisch</h3>
        </div>
          <p className="description">
            Alle Fischgerichte können entweder mit Rosmarinkartoffeln oder
            Pommes oder Beilagensalat/Gemüse bestellt werden.
          </p>
          {menu?.map((item, index) => {
            return (
              item.category === "Fisch" && <Dish key={index} item={item} />
            );
          })}
        </div>
        <div className="dessert menu-item">
        <div className="menu-item-header" style={{ backgroundImage: `url(${food})` }}>
          <h3 >Dessert</h3>
        </div>
          {menu?.map((item, index) => {
            return (
              item.category === "Dessert" && <Dish key={index} item={item} />
            );
          })}
        </div>
      </div>
      {basket.length ? (
      <Link to="/order">   <div className="go-to-order">
         <div className="basket-icon">
            <MdShoppingCart className="icon"/>
            <p>{basket.length}</p>
          </div>
          <span>Ihre Bestellung abschließen</span>
         
        </div> </Link>
      ) : null}
    </section>
  );
}

export default Menu;
