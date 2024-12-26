import React from 'react'
import {BsTwitter, BsInstagram} from "react-icons/bs"
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
// import "../CV/CV.pdf"

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <FaGithub/>
        </a>
        </div>
      
        <div>
        <a href="https://www.linkedin.com/in/vaibhav-soni-822b64242/" target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn/>
        </a>
        </div>
      
        <div>
        <a href="https://www.instagram.com/__vaibhav__soni_/" target="_blank" rel="noopener noreferrer">
        <FaInstagram/>
        </a>
        </div>
        <div>
        <a href="https://wa.me/7706004827" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp/>
        </a>
        </div>
        <div>
        <a href="../src/CV/CV.pdf" download="CV.pdf" 
        rel="noopener noreferrer"
        style={{
          color:"black",
          textDecoration: "none",
         
        }}> <h3>CV</h3></a>
        </div>
      
    </div>
  )
}

export default SocialMedia
