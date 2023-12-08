import React from 'react'
import './Services.css'
import img from '../Assests/Insurance.png'

const Services = () => {
  return (
    <>
      <div className='second-section'>
          <div className="inner-container">
              <div className="section-title">
                  <h2 >Our Services</h2>
              </div>
              <div className="grid-section">
            <div className="service-icon">
              <img src={img} alt="" />
              <h3>Insurance</h3>
              <p>Protect yourself and your family with our insurance services tailored specifically for immigrants.</p>
            </div>
          </div>
          </div>
      </div>
    </>
  )
}

export default Services