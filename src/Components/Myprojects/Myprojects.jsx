import React, { useEffect } from 'react'
import './Myprojects.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'
import AOS from 'aos'
import 'aos/dist/aos.css'; // Import AOS styles


const Myprojects = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 });
      }, []);

  return (
    <div  id='work' className='services'>

        <div className="services-title" data-aos="fade-up">
            <h1>Latest Works</h1>
            <img src={theme_pattern} alt="" srcset="" />
        </div>
        <div className="services-container" data-aos="fade-up">
            {Services_Data.map((service,index)=>{
                return <div key={index} className='services-format' data-aos="fade-up">
                    <h3>{service.s_no}</h3>
                    <h2>{service.s_name}</h2>
                    <p>{service.s_desc}</p>
                    <div className="services-readmore">
                        <p><a href={service.s_link}>View Project</a></p>
                        <img src={arrow_icon} alt="" srcset="" />
                    </div>

                </div>

            })}

        </div>

    </div>
  )
}


export default Myprojects