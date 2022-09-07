import React from 'react'
import './mycart.css'
import { useState, useEffect } from 'react'





const Mycart = ({cart, setCart, handleChange, show, setShow}) => {
  
 
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((p) => p.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((p) => (ans += p.amount * p.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice()
  })
  
  return (
    
    <article>
      {cart.length > 0 ? <div className='title-parent'>
        <h className="product-description">product description</h>
        <h className="productName">product name</h>
        <h className="price">price</h>
        <h className="quantity">quantity</h>
      </div> : <div className='mycart-noproduct'>you haven`t added any product!</div>}
      {cart.map((p) => (
         <section className='mycart__container' key={p.id}>
         <main className='mycart__main'>
   <div className='main-item-parent'>
   <div className='mycart-productImg'><li><img className='mycart-img' src={p.img} alt="" /></li></div>
  <div className='mycart-productName'><li>{p.productName}</li></div>
  <div className='mycart-price'><li>{p.price}</li></div>
  <div className='mycart-qunatity'><li>1</li></div>
  <button className="myCart-remove-btn" onClick={() => handleRemove(p.id)} >remove</button>
   </div>
         </main>
       </section>
      ))}
    </article>
 


  )
}

export default Mycart