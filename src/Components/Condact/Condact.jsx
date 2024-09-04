import React, { useEffect } from 'react'
import './Condact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import github from '../../assets/github.png'
import telegram from '../../assets/telegram.png'
import twitter from '../../assets/twitter.png'
import linkedin from '../../assets/linkedin.png'
// import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'

import AOS from 'aos'
import 'aos/dist/aos.css'; // Import AOS styles



const Condact = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
      }, []);

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "83c13970-9381-4798-9edc-d1d9881a3c94");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            alert(res.message)
        //   console.log("Success", res);
        }
      };
    
  return (
    <div id='condact'   className='condact'>
        <div className="condact-title" data-aos="fade-up">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" srcset="" />
        </div>
        <div className="condact-section"  data-aos="fade-up">
            <div className="condact-left"  data-aos="fade-up">
                <h1>Let's talk</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                <div className="condact-details"  data-aos="fade-up">
                    <div className="condact-detail">
                        <img src={mail_icon} alt="" srcset="" /><p>dineshbabu@gmail.com</p>

                    </div>
                    <div className="condact-detail"  data-aos="fade-up">
                        <img src={call_icon} alt="" srcset="" /><p>+91-6383-0917-48</p>
                        
                    </div>
                    <div className="condact-detail"  data-aos="fade-up">
                        <img src={location_icon} alt="" srcset="" /><p> Trichy</p>
                        
                    </div>
                    <div className="social-icon" >
                   <button onClick={() => window.open('www.linkedin.com/in/dinesh-babu-bb016930a', '_blank')} data-aos="fade-left"><img src={linkedin} alt="LinkedIn" /></button>
                   <button onClick={() => window.open('https://github.com/babu6383', '_blank')} data-aos="fade-left"><img src={github} alt="GitHub" /></button>
                   <button onClick={() => window.open('t.me/techpapuu', '_blank')} data-aos="fade-left"><img src={telegram} alt="Telegram" /></button>
                   <button onClick={() => window.open('www.twitter.com/@Dinesh1257162', '_blank')} data-aos="fade-left"><img src={twitter} alt="Twitter" /></button>
                   {/* <button onClick={() => window.open('#', '_blank')} data-aos="fade-left"><img src={facebook} alt="Facebook" /></button> */}
                   <button onClick={() => window.open('https://www.instagram.com/dio_dinesh_20_12?igsh=MWFieTk0amw1Z3hqeg==', '_blank')} data-aos="fade-left"><img src={instagram} alt="Facebook" /></button>
                   </div>

                </div>
            </div>
            <form  onSubmit={onSubmit} action="" className="condact-right"  data-aos="fade-up">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name'   data-aos="fade-up"/>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your email' name='email'  data-aos="fade-up"/>
                <label htmlFor=""  data-aos="fade-up">Right yout message here</label>
                <textarea name="message" rows="8" placeholder='Enter your Message'  data-aos="fade-up"></textarea>
                <button  type='submit'   className='condact-submit'  data-aos="fade-up"> Submit Now</button>
            </form>
        </div>
    </div>
  )
}

export default Condact