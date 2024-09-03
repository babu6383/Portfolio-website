import React from 'react'
import './Condact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'


const Condact = () => {

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
        <div className="condact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" srcset="" />
        </div>
        <div className="condact-section">
            <div className="condact-left">
                <h1>Let's talk</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                <div className="condact-details">
                    <div className="condact-detail">
                        <img src={mail_icon} alt="" srcset="" /><p>dineshbabu@gmail.com</p>

                    </div>
                    <div className="condact-detail">
                        <img src={call_icon} alt="" srcset="" /><p>+91-6383-0917-48</p>
                        
                    </div>
                    <div className="condact-detail">
                        <img src={location_icon} alt="" srcset="" /><p> CA,United States</p>
                        
                    </div>
                </div>
            </div>
            <form  onSubmit={onSubmit} action="" className="condact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name' />
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your email' name='email' />
                <label htmlFor="">Right yout message here</label>
                <textarea name="message" rows="8" placeholder='Enter your Message'></textarea>
                <button  type='submit'   className='condact-submit'> Submit Now</button>
            </form>
        </div>
    </div>
  )
}

export default Condact