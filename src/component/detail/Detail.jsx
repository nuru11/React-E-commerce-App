import React from 'react'
import "./detail.css"

import list from '../../D'

function Detail({detailCart, setDetailCart, setShowDetail}) {

    const handleRemove = (id) => {
        const arr = detailCart.filter((item) => item.id !== id);
        setDetailCart(arr);
     //   handlePrice();
     setShowDetail(false)
      };
      
  return (
    <div className="detail">
        {detailCart.map((t) => (
            <section key={t.id}>
           <div className="item-detail">
            <div className="detail-img-parent"><img src={t.img} alt='' /></div>
            <div className="item-parent">
            <div className="detail-productName">product name: {t.productName}</div>
            <div className="detail-price">price: {t.price}</div>
            <div className="detail-detail">{t.detail}</div>
           <button className="detail-backHome-btn" onClick={() => handleRemove(t.id)}>back home</button>
           </div>
           </div>
            </section>
        ))}

    </div>
  )
}
  
export default Detail