// import React, { useEffect } from 'react'
// import './Hero.css'
// import profile_img  from '../../assets/profile_img.svg'
// import AnchorLink from 'react-anchor-link-smooth-scroll'
// import resume from '../../assets/Dinesh-babu-S-CV-Resume .pdf'
// import AOS from 'aos'



 

// const Hero = () => {

//   useEffect(()=>{
//     AOS.init({duration:3000})

//   },[])


//   return (
//     <div id='home'  className='hero' data-aos="fade-up">
//         <img src={profile_img} alt="" srcset="" />
//         <h1 data-aos="fade-up"><span>I'm Dinesh Babu,</span> frontend developer</h1>
//         <p data-aos="fade-up">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
//         <div className="hero-action">
//             <div className="hero-connect" data-aos="fade-right"><AnchorLink className='anchor-link' offset={50} href='#condact'>Connect With Me</AnchorLink></div>
//             <div className="hero-resume" data-aos="fade-left"><a href={resume}download='resume'>My Resume</a> </div>
//         </div>

//     </div>
//   )
// }


// export default Hero


import React, { useEffect } from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import resume from '../../assets/Dinesh-babu-S-CV-Resume .pdf';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div id='home' className='hero' data-aos="fade-up">
      <img src={profile_img} alt="Profile" />
      <h1 data-aos="fade-up"><span>I'm Dinesh Babu,</span> frontend developer</h1>
      <p data-aos="fade-up">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      <div className="hero-action">
        <div className="hero-connect" data-aos="fade-up">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink>
        </div>
        <div className="hero-resume" data-aos="fade-up">
          <a href={resume} target="_self">My Resume</a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
