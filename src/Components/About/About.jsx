import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'

const About = () => {
  return (
    <div id='about'   className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" srcset="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" srcset="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores ut laboriosam ipsam sit rerum natus necessitatibus dolorum fugiat exercitationem. Est?</p>
                    {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil error labore reprehenderit modi ratione quisquam beatae sunt! Cupiditate, dignissimos est.</p> */}
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p> <hr style={{width:"90%"}}/></div>
                    <div className="about-skill"><p>REACT JS</p> <hr style={{width:"40%"}}/></div>
                    <div className="about-skill"><p>JAVASCRIPT</p> <hr style={{width:"75%"}}/></div>
                    <div className="about-skill"><p>NEXT JS</p> <hr style={{width:"50%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achivements">
            <div className="about-achievement">
                <h1>10+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>90+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>15+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>

    </div>
  )
}

export default About