import React, { useContext} from 'react'
import CastelloContext from "../Context/Context"
import {MdOutlineAddShoppingCart} from "react-icons/md"
function Dish({item}) {

    const {setBasket}= useContext(CastelloContext)

    // formats a Number to price format ex: 10,90 €
    const formatter = new Intl.NumberFormat("de-DE", {
      style:"currency",
      currency: "EUR"
  })  
    const addToBasket=()=>{
        setBasket((prevValue)=>{
            sessionStorage.setItem('basket', JSON.stringify([...prevValue, item]))
            return [...prevValue, item]
        })
    }
  return (
    <div className='dish'>
    <div >
    <p className='dish-title'>{item.name}</p>
    <p className='dish-description'>{item.description}</p>
    </div>
    <div className='price-basket'>
        <p className='dish-price'>{formatter.format(item.price)}</p>
        <MdOutlineAddShoppingCart className='basket' onClick={addToBasket} />
    </div>
    </div>
  )
}

export default Dish