import React from 'react'
import './Contact.css'
import img from '../Assests/contact-us-image.jpg'

const Contact = () => {
  return (
    <div className='eight-section'>
        <div className="inner-container">
            <div className="left-side">
                    <img src={img} alt="" />
            </div>
            <div className="right-side">
                <div className="section-title">
                    <h2>Contact Us</h2>
                    <form action="">
                    <div className='contact-form'>
                        <div>
                            <input className='input'  type="text" id="fname" name="select service" placeholder="Select Service "/>
                            <select className='select-list' name="Insurance" id="Insurance" form="">
                                <option value="Insurance">Insurance</option>
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="opel">Opel</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                        <div>
                            <input className='input' type="text" id="name" name="name service" placeholder="Name "/>
                            <input className='input'  type="email" id="email" name="email" placeholder="Email "/>
                        </div>
                        <div>
                            <input className='Subject' type="text" id="subject" name="subject" placeholder="Subject "/>
                        </div>
                        <div>
                             <textarea  type="text" id="message" name="select service" rows="7" cols="55" placeholder="Write Message Here"/>
                        </div>
                    <a href="">Send Your Query</a>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact