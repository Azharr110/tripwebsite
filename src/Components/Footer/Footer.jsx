import React from 'react'
import './footer.scss'
import{SiYourtraveldottv} from 'react-icons/si'
import{RiWhatsappFill } from 'react-icons/ri'
import{AiFillInstagram, AiFillFacebook} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className="footer">
      <div className="secContainer container grid">
         <div className="logoDiv">

          <div className="footerLogo">
            <a href="#" className="logo flex">
              <h1 className='flex'>
              <SiYourtraveldottv className="icon"/>
              Dot
              </h1>
            </a>
          </div>
          <div className="socials flex">
            <AiFillFacebook className="icon"/>
            <AiFillInstagram className="icon"/>
            <RiWhatsappFill className="icon"/>
         </div>

         </div>

         <div className="footerLinks">
          <span className="linkTitle">
            Information
          </span>
          <li>
            <a href="#">
              Home
            </a>
          </li>
          <li>
            <a href="#">
              Explore
            </a>
          </li>
          <li>
            <a href="#">
              Travel
            </a>
          </li>
          <li>
            <a href="#">
              Blog
            </a>
          </li>
         </div>


         <div className="footerLinks">
          <span className="linkTitle">
            Helpful Links
          </span>
          <li>
            <a href="#">
              Destination
            </a>
          </li>
          <li>
            <a href="#">
              Support
            </a>
          </li>
          <li>
            <a href="#">
              Travel & Condition
            </a>
          </li>
          <li>
            <a href="#">
              Privacy
            </a>
          </li>
         </div>
         <div className="footerLinks">
          <span className="linkTitle">
            Contact Us
          </span>
         <span className='phone'>+91 6386089590</span>
         <span className='email'>abdazhar786@gmail.com</span>
         </div>

         

         
      </div>
    </div>
  )
}

export default Footer