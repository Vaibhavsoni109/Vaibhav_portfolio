import React, { useState } from 'react'
import './Footer.scss'
import MotionWrap from '../../wrapper/MotionWrap';
import AppWrap from '../../wrapper/AppWrap';
import { images } from "../../constants"
import {client} from "../../client";
const Footer = () => {
  // const [first, setfirst] = useState(second) 
  const [fromData, setfromData] = useState({name:"",email:"",message:""})
  const [isFormSubmitted, setisFormSubmitted] = useState(false)
  const [loading, setloading] = useState(false)

  const {name,email,message}=fromData;

  const handleChangeInput=()=>
  {
    const {name,value}=e.target;
    setfromData({...FormData,[name]:value})
  }

  const handleSubmit=()=>
  {
    setloading(true);
  }
  return (
    
      <>
      <h2 className="head-text">
        Take a cofee and chat with me 
      </h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:dev.vaibhavsoni@gmail.com" className='p-text'>dev.vabhavsoni@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel:+917706004827" className='p-text'>+917706004827</a>
        </div>
      </div>


      <div className="app__footer-form app__flex">
        <div className="app__flex">
          <input type="text"className='p-text' name='name' placeholder='Your Name' value={name} onChange={handleChangeInput}/>
          <input type="email"className='p-text' name='email' placeholder='Your Email' value={email} onChange={handleChangeInput}/>
        </div>
        <div>
          <textarea name="message"value={message} className='p-text' placeholder='Your Message' id=""></textarea>
        </div>
        <button className='p-text' type='button' onClick={handleSubmit}>{loading?"Sending...":"Send Message"}</button>
      </div>
      </>
   
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);
