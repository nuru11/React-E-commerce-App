import React from 'react'
import './newmain.css'

const Newmain = ({p, handleClick,handleClickDetail}) => {
    const {productName, price, description, img, detail } = p
    
  return (
   <div>
    
    <div className='main-parent'> 
    <div className='main__container'>
      <div className="img-parent">
        <img className='img' src={img} alt="product image" />
      </div>
      <div className='product-info'>
      <h2 className='productName'>{productName}</h2>
      <h3 className='price'>price ${price}</h3>
      <h5 className='description'>{description}</h5>
      <button onClick={() => handleClick(p)} className='buy-btn'>Buy</button>
     <button onClick={() => handleClickDetail(p)} className="detail-btn">detail</button>
      </div>
      </div>
</div>
    </div>
  )
}

export default Newmain