import React from 'react'
import './Nav.css'
import img from '../Component/Assests/logo.png'

const Nav = () => {
  return (
    <>
    <div className='top-header'></div>

        <div className="header-bottom">
                <div className="logo">
                    <img src={img} alt="" />
                </div>
                <div className="nav">
                    <a href="/" className='active' >Home</a>
                    <a href="/" >About</a>
                    <a href="/" >Blogs</a>
                    <a href="/" >Counsellor</a>
                    <a href="/" >Services</a>
                    <a href="/" >Contact</a>
                    
                </div>
                
                 </div>


        
    </>
   
  )
}

export default Nav