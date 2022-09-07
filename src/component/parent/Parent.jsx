import React, {useState} from 'react'
import './parent.css'

import Header from '../header/Header'

import Contact from "../contact/Contact"
import Newmain from '../newmain/Newmain'
import list from '../../D'

const Parent = ({handleClick, handleClickDetail}) => {

  return(
    <section className='main-parentt'>
      <div className='ppp'>
      {list.map((p) =>(
        <Newmain key={p.id} p={p} handleClick={handleClick} handleClickDetail={handleClickDetail} />
      ))}
      </div>
      <Contact />
      
    </section>
  )
}

export default Parent