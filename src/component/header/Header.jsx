import React from 'react'
import "./header.css"
import {AiOutlineShoppingCart} from "react-icons/ai"

 
const Header = ({setShow}) => {
 
  
 
  return (
    <header className='header'>
    <div className='header__container'>
      <div className='header-parent'>
        <button className='go-to-product' onClick={() => setShow(true)}>shop product</button>
     <div className='header__icon'><AiOutlineShoppingCart /> <h3  className='greeting'>welcome to our shop</h3></div>
      <button onClick={() => setShow(false)} className='mycart-btn'>my product</button>
      </div>
    </div>
    </header>
  )
}

export default Header