import React from 'react'
import './Home.css'
import video from '../Assests/video.mp4'

const Home = () => {
  return (
    <div className='first-section'>
        <video id='video' width='100%'  autoPlay loop  muted playsInline>
            <source src={video}/>
        </video>
        <div className="overplay">
            <div className="inner-text">
                <h1>Are you new to Germany?</h1>
                <p>Don't worry, we got your back! Let us connect you to the resources you need for a seamless transition into German life.</p>
            </div>
        </div>

    </div>
  )
}

export default Home