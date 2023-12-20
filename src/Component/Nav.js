import React,{useState} from 'react'
import './Nav.css'
import img from '../Component/Assests/logo.png'

const Nav = () => {
  const [open, setOpen] = useState(false)
  const handleClick = () =>{
    setOpen(!open)
  }
  return (
    <>
    <div className='top-header'></div>

        <div className="header-bottom">
                <div className="logo">
                    <img src={img} alt="" />
                    {/* <button class="nav-toggle">
                      <i class="fas fa-bars"></i>
                   </button>   */}
                </div>
                <div className="nav">
                    <a href="/" className='active' >Home</a>
                    <a href="/" >About</a>
                    <a href="/" >Blogs</a>
                    <a href="/" >Counsellor</a>
                  <a className='service' href="/" >Services
                    <div className='display'>
                    <div class="dropdown-content">
                      <div className="conetnt">
                      <h3>Insurance</h3>
                       <a href="#">Public Health</a>
                       <a href="#">Private Health</a>
                        <a href="#">Liability</a>
                        <a href="#">Household</a>
                        <a href="#">Legal</a>
                        <a href="#">Expat</a>
                        <a href="#">Dental</a>
                        <a href="#">Life</a>
                        <a href="#">Disability</a>
                        <a href="#">Bike</a>
                      </div>
                      <div className="conetnt">
                      <h3>Banking</h3>
                       <a href="#">Money Transfer WISE</a>
                       <a href="#">Current Account REVOLUT</a>
                        <a href="#">Rental deposit Guarantee</a>
                      </div>

                      <div className="conetnt">
                      <h3>Individual Service</h3>
                       <a href="#">Orientation</a>
                       <a href="#">Immigration</a>
                        <a href="#">House & Home</a>
                        <a href="">Family & Pets</a>
                        <a href="">Settling in & Moving out</a>
                        <a href="">Expense Management</a>
                      </div>

                      <div className="conetnt">
                      <h3>Council and Faith</h3>
                       <a href="#">Faith & Religion</a>
                       <a href="#">Violence Helpline</a>
                      </div>

                     </div>
                    </div>
                  </a>
                    <a href="/" >Contact</a>       
                </div>      
              <div className='none'>
                <button class="sidebar-toggle">
                  <i class="fas fa-bars" onClick={handleClick}></i>
                </button>
                <div className={open? 'sidebar collaspe': 'sidebar'}>

                  <div className="sidebar-header">
                    <button class="close-btn">
                      <i class="fas fa-times" onClick={handleClick}></i>
                    </button>
                  </div>
                  <ul className='links'>
                    <li> <a href="">Home</a></li>
                    <li><a href="">Counsellor</a></li>
                    <li><a href="">Blogs</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Service</a>
                    <div class="dropdown-content">
                      <div className="conetnt">
                        <a href="">
                          <h3>Insurance</h3>
                          <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6.34317 7.75732L4.92896 9.17154L12 16.2426L19.0711 9.17157L17.6569 7.75735L12 13.4142L6.34317 7.75732Z" fill="currentColor"></path></svg>

                            <a href="#">Public Health</a>
                            <a href="#">Private Health</a>
                            <a href="#">Liability</a>
                            <a href="#">Household</a>
                            <a href="#">Legal</a>
                            <a href="#">Expat</a>
                            <a href="#">Dental</a>
                            <a href="#">Life</a>
                            <a href="#">Disability</a>
                            <a href="#">Bike</a>
                        </a>
                      </div>
                    </div>
                    
                    
                    
                    
                    
                    
                    </li>
                    <li><a href="">Contact</a></li>
                  </ul>   
                </div>
              </div>
        </div>


        
    </>
   
  )
}

export default Nav