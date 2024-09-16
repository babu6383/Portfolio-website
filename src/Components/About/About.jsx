import React, { useEffect } from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/final2.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'; // Import AOS styles


const About = () => {

   
        useEffect(() => {
          AOS.init({ duration: 2000 });
        }, []);
      
  return (
    <div id='about'   className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" srcset=""  data-aos="fade-right"/>
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" srcset="" />
            </div>
            <div className="about-right">
                <div className="about-para"  data-aos="fade-up">
                    <p>"Enthusiastic and motivated entry-level professional with a degree in [Front end ], ready to bring fresh ideas and energy to a dynamic team. Strong communicator, collaborator, and adaptability enthusiast. Excited to learn from industry experts and contribute to meaningful projects that make a difference."</p>
                    {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil error labore reprehenderit modi ratione quisquam beatae sunt! Cupiditate, dignissimos est.</p> */}
                </div>
                <div className="about-skills">
                    <div className="about-skill"  data-aos="fade-up"><p>HTML & CSS</p> <hr style={{width:"90%"}}/></div>
                    <div className="about-skill"  data-aos="fade-up"><p>REACT JS</p> <hr style={{width:"40%"}}/></div>
                    <div className="about-skill"  data-aos="fade-up"><p>JAVASCRIPT</p> <hr style={{width:"40%"}}/></div>
                    <div className="about-skill"  data-aos="fade-up"><p>BOOTSTRAP 5</p> <hr style={{width:"45%"}}/></div>
                    <div className="about-skill"  data-aos="fade-up"><p>TAILWIND CSS</p> <hr style={{width:"40%"}}/></div>
                    <div className="about-skill"  data-aos="fade-up"><p>NODE JS</p> <hr style={{width:"20%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achivements"  data-aos="fade-up">
            <div className="about-achievement">
                <h1>0+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>10+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>0+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>

    </div>
  )
}

export default About