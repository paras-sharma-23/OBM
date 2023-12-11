import React from 'react'
import './Why.css'
import Guarantee from '../Assests/guarantee.png'
import Experienced from '../Assests/Experience.png'
import Tailored from '../Assests/Material.png'
import Easy from '../Assests/User.png'

// fdata = [
//     {
//       id: 1,
//       title: "One-Stop Solution",
//       description: "We provide support to immigrants covering everything from finding accommodations, jobs, and legal and financial advice in one platform." ,
//       img: Guarantee,  //extract  it from images folder
//     },
//   {
//     id: 2,
//       title: "Experienced Professionals",
//       description: "Our team of support system has decades of experience in assisting & Counselling students, job seekers, and others." ,
//       img: Experienced,
//   },
//   {
//     id: 3,
//       title: "Tailored Service",
//       description: "We offer customised solutions catering for the unique needs and concerns of immigrants" ,
//       img: Tailored,
//   },
//   {
//   id: 4,
//   title: "Easy-to-Use Platform",
//   description: "Our platform is user-friendly and easy to navigate which makes it simple to access the information that you need." ,
//   img: Guarantee,
//   },
//   ] ;







const Why = () => {
  return (
    <div className='fourth-section'>
        <div className="inner-container">
            <div className="section-title">
                <h2>Why Choose Us</h2>
            </div>
            <div className="block-container">
                <div className="inner-block">
                    <div className="grid-section">
                        <div className="service-icon">
                        <img src={Guarantee} alt="" />
                        </div>
                        <h5>One-Stop Solution</h5>
                        <p>We provide support to immigrants covering everything from finding accommodations, jobs, and legal and financial advice in one platform.</p>
                    </div>

                    <div className="grid-section">
                        <div className="service-icon">
                        <img src={Experienced} alt="" />
                        </div>
                        <h5>Experienced Professionals</h5>
                        <p>We provide support to immigrants covering everything from finding accommodations, jobs, and legal and financial advice in one platform.</p>
                    </div>

                    <div className="grid-section">
                        <div className="service-icon">
                        <img src={Tailored} alt="" />
                        </div>
                        <h5>Tailored Service</h5>
                        <p>We offer customised solutions catering for the unique needs and concerns of immigrants</p>
                    </div>

                    <div className="grid-section">
                        <div className="service-icon">
                        <img src={Easy} alt="" />
                        </div>
                        <h5>Easy-to-Use Platform</h5>
                        <p>Our platform is user-friendly and easy to navigate which makes it simple to access the information that you need.</p>
                    </div>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Why