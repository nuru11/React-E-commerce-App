import React from 'react'
import "./contact.css"

const Footer = () => {
  return (
    <div id="contact" className='footer'>
      <div className='footer-parent'>
       <div className='email-us'>EMAIL US<span>info@domain.com</span></div>
        <div className='footer-call-us'>CALL US<span>00384859693</span></div>
        <div className='find-us'>FIND US<span>12345 Fake ST NoWhere AB Country</span></div> 
      </div>
    </div> 
  )
}

export default Footer