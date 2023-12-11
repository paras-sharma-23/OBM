import React from 'react'
import './About.css'
import img from '../Assests/about.jpeg'
import imgs from '../Assests/about.png'
const About = () => {
  return (
    <div className='third-section'>
        <div className="inner-container">
            <div className="left-container">
                <div className="about">
                <img src={img} alt="" />
                </div>
                <div className="about-small-img">
                    <img src={imgs} alt="" />
                </div>
            </div>
            <div className="right_container">
                <h2>About Onboarding-Mate</h2>
                <p>Welcome to Onboarding Mate, your common platform and trusted companion for all individuals who are new to Germany and seeking assistance with various aspects of settling down in a foreign land. We understand that the challenges of navigating a new country, especially without fluency in the local language, can be overwhelming.</p>
                <div>
                <a to="/">Read More</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About