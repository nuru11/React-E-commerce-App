import React, {useState} from 'react';




import Header from "./component/header/Header"

import Newmain from './component/newmain/Newmain'

import Parent from "./component/parent/Parent"
import Mycart from './component/mycart/Mycart'
import Detail from "./component/detail/Detail"



import { AiFillSafetyCertificate } from 'react-icons/ai';

function App(){

const [show, setShow] = useState(true)

const [showDetail, setShowDetail] = useState(false)

const [cart, setCart] = useState([])

const [detailCart, setDetailCart] = useState([])

const handleClick = (p) => {
  if (cart.indexOf(p) !== -1) return;
  setCart([...cart, p]);
};

const handleClickDetail = (p) => {
  if (detailCart.indexOf(p) !== -1) return;
  setDetailCart([...detailCart, p]);
  setShowDetail(true)
};

  return(
      <>
      <Header setShow={setShow} />
      {show ? showDetail ? <Detail setDetailCart={setDetailCart} setShowDetail={setShowDetail} detailCart={detailCart}/> : <Parent handleClickDetail={handleClickDetail}  handleClick={handleClick}/>  : <Mycart cart={cart} setCart={setCart} />}
    
      </>
  )
}

export default App;