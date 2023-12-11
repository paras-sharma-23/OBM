import React from 'react'
import './Best.css'
import medical from '../Assests/medical.jpg'
// import Home from '../Assests/home_insurance.jpg'
import Money from '../Assests/money_transfer.jpg'
import Family from '../Assests/family.jpg'

const Best = () => {
  return (
    <div className='fifth-section'>
        <div className="inner-container">
            <div className="section-title">
                <h2>Our Best Services</h2>
            </div>
            <div className="slider-container">
              <div className="card-wrapper">
                <div className="card">
                  <div className="image-box">
                    <img src={medical} alt="" />
                  </div>
                  <div className="content">
                    <h5>Public Health Insurance</h5>
                    <p>Stay healthy and protected with our specialized health insurance for immigrants. Access quality care and enjoy peace of mind.</p>
                  </div>
                </div>

                <div className="card">
                  <div className="image-box">
                    <img src={Family} alt="" />
                  </div>
                  <div className="content">
                    <h5>Family & Pets</h5>
                    <p>Get your family and pets insured and safeguarded by us even before traveling to the new country. Choose us so that you have teh process simplified.</p>
                  </div>
                </div>


                <div className="card">
                  <div className="image-box">
                    <img src={Money} alt="" />
                  </div>
                  <div className="content">
                    <h5>Money Transfer</h5>
                    <p>Write me a 20 words advertising copy website section which talks about Health insurance services to immigrants.</p>
                  </div>
                </div>


              </div>
            </div>
        </div>

    </div>
  )
}

export default Best