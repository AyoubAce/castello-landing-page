import React, { useState, createContext, useEffect } from "react";

const CastelloContext = createContext();

function ContextProvider({ children}) {
  const [basket, setBasket] = useState([]);
  const [sum, setSum] = useState(0);
  console.log("basket",basket);
  useEffect(()=>{
    if(JSON.parse(sessionStorage.getItem("basket"))){
      setBasket(JSON.parse(sessionStorage.getItem("basket")))
    }
  },[])
 

console.log(basket);
  return (
    <CastelloContext.Provider
      value={{
        basket,
        setBasket,
        sum,
        setSum,
      }}
    >
      {children}
    </CastelloContext.Provider>
  );
}
export {ContextProvider}
export default CastelloContext;
