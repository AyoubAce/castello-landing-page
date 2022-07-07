import React, { useContext,useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import CastelloContext from "../Context/Context";
import Basket from "../components/Basket";
import { MdArrowForwardIos } from "react-icons/md";
import OrderForm from "../components/forms/OrderForm";
function Order() {
  const { basket } = useContext(CastelloContext);
  useLayoutEffect(() => {
    window.scrollTo(0,0)
    }, [])


  const formatter = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  });
  const prices = basket?.map((item) => {
    return item.price;
  });
  const totalPrice = prices.reduce(
    (prevValue, nextValue) => prevValue + nextValue,
    0
  );

  return (
    <section className="order-page">
      <div className="order-container">
        {basket.length ? (
          <>
            <h1>Ihre Bestellung abschließen</h1>
            <div>
              <Basket />
              {totalPrice && (
                <div className="total-price">
                  <p> Summe: {formatter.format(totalPrice)}</p>
                </div>
              )}
            </div>
            <div>
              <h4>
              <span>-</span> Lieferzeit <span>-</span>
              </h4>
              <p>Ankunftzeit 20-45 Min</p>
              <h4>
              <span>-</span> Bestätigung <span>-</span>
              </h4>
              <p>
                Wir rufen Sie nach Erhalt Ihrer Bestellung zur Bestätigung an
              </p>
            </div>
            <div className="">
             <h4>Lieferadresse</h4>
              <OrderForm />
            </div>
          </>
        ) : (
          <div className="order-fallback">
            <h2>Keine Artikel im Warenkorb gefunden</h2>
            <Link to="/menu">
              <p className="btn">
                Speisekarte <MdArrowForwardIos className="icon" />
              </p>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default Order;
