import React from 'react'
import './Description.css'
import img from '../Assests/family_insurance.jpg'
import money from '../Assests/money.jpg'

const Description = () => {

  return (
    <div className='seventh-section'>
        <div className="inner-container">
            <div className="leftside">
            <div className="about">
                <img src={img} alt="" />
                </div>
            </div>
            <div className="right">
                <div className="inner-content">
                    <h2>Life Insurance</h2>
                    <p>We offer life insurance services for immigrants in Germany, providing financial protection and peace of mind for you and your loved ones. Our policies are designed to meet the unique needs of newcomers, with flexible options and affordable rates.
                    <br></br>We understand the challenges of settling into a new country, which is why we offer personalized advice and support to help you make informed decisions about your life insurance needs. Contact us today to learn more and secure your future in Germany. </p>

                    <a href="">Read More</a>
                </div>
            </div>

            

        </div>




        <div className="inner-container column-reverse">
            <div className="right">
            <div className="inner-content">
                    <h2>Money Transfer</h2>
                    <p>Our platform is fast, reliable, and secure, allowing you to send money to your loved ones anywhere in the world. We offer competitive exchange rates and low fees, so you can save money while staying connected with your family and friends.

                    <br></br>Our user-friendly interface makes it easy to send money from your computer or mobile device, with 24/7 customer support available to answer any questions you may have.</p>

                    <a href="">Read More</a>
                </div>
            
            </div>
            <div className="leftside">
            <div className="about side">
                <img className='img' src={money} alt="" />
                </div>
               
            </div>

            

        </div>
     </div>
  )
}

export default Description