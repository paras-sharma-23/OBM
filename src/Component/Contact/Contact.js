import React from 'react'
import './Contact.css'
// import img from '../Assests/contact-us-image.jpg'

const Contact = () => {
  return (
    <div className='eight-section'>
        <div className="inner-container">
            <div className="left-side">
                <div className="contact-img">
                    <img src="" alt="" />
                </div>

            </div>
            <div className="right-side">
                <div className="section-title">
                    <h2>Contact Us</h2>
                    <form action="">
                        <div className='contact-form'>
                        <input type="text" id="fname" name="select service" placeholder="select service "/>
                            <select name="Insurance" id="Insurance" form="">
                                <option value="Insurance">Insurance</option>
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="opel">Opel</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                        <div>
                        <input type="text" id="name" name="name service" placeholder="Name "/>
                        <input type="email" id="email" name="email" placeholder="Email "/>
                        </div>
                        <div>
                        <input type="text" id="subject" name="subject" placeholder="Subject "/>
                        </div>
                        <div>
                        <textarea type="text" id="fname" name="select service" placeholder="select service "/>
                        </div>



                    </form>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Contact