import React, { useEffect } from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'

import AOS from 'aos'
import 'aos/dist/aos.css'; // Import AOS styles

const Footer = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 });
      }, []);

  return (
    <div className='footer' data-aos="fade-up">
        <div className="footer-top">
            <div className="footer-top-left" data-aos="fade-up">
                <img src={footer_logo} alt="" srcset="" />
                <p>"I'm Dinesh Babu, a passionate frontend developer crafting beautiful and functional web experiences."</p>
            </div>
            <div className="footer-top-right" data-aos="fade-up">
                <div className="footer-email-input"data-aos="fade-up" >
                    <img src={user_icon} alt="" srcset="" />
                    <input type="email" placeholder='Enter your email' data-aos="fade-up"/>
                </div>
                <div className="footer-subscribe" data-aos="fade-up">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">&copy;2024 Dinesh babu. All Rights reserved</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
           
        </div>
       
    </div>
  )
}

export default Footer