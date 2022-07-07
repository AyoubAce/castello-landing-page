import React, {useContext} from 'react'
import CastelloContext from "../Context/Context";
import {MdOutlineDeleteForever} from "react-icons/md"

function Basket() {
  const { basket, setBasket } = useContext(CastelloContext);

    // formats a Number to price format ex: 10,90 €
  const formatter = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  });
 
 const deleteFromBasket = (id)=>{
   setBasket((prevValues)=>{
     const updatedBasket= prevValues.filter((item,index)=>{
         return index !== id
    })
    sessionStorage.setItem("basket", JSON.stringify(updatedBasket))
    return updatedBasket
   })
 }
  return (<>
  {basket?.map((item,index)=>{
  return <div key={index} className="dish">
    <div>
      <p className="dish-title">{item.name}</p>
      <p>{item.description}</p>
    </div>
    <div className="price-basket">
      <p className="dish-price">
        {formatter.format(item.price)}
      </p>
      <MdOutlineDeleteForever
        className="basket"
        onClick={()=>deleteFromBasket(index)}
      />
    </div>
  </div>
  })}
    </>
  )
}

export default Basket