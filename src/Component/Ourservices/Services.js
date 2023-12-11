import React from 'react'
import './Services.css'
import img from '../Assests/Insurance.png'
import Transfer from '../Assests/transfer.png'
import Orientation from '../Assests/orientation.png'
import Immigration from '../Assests/immigration.png'
import House from '../Assests/house.png'
import Family from '../Assests/family.png'
import Settling from'../Assests/settling.png'
import Expense from '../Assests/expense.png'
import Tax from '../Assests/tax.png'
import Learn from '../Assests/learn.png'

// const styleObj ={
//   fontSize:'13px'
// }
const data  = [
  {
    id: 1,
    title: "Insurance",
    description: "Protect yourself and your family with our insurance services tailored specifically for immigrants." ,
    image: img,  //extract  it from images folder
  },
{
  id:2,
  title:"Money Transfer",
  description:"We offer competitive exchange rates to save your money with fast, secure, and reliable money transfer services internationally.",
  image: Transfer,
  
},
{ 
  id:3,
  title:"Orientation",
  description:"We provide the best services that will help you once you come to Germany.",
  image:Orientation,
},
{
  id:4,
  title:"Immigration",
  description:"Immigration has never been easier before with our best world class services.",
  image: Immigration,
},
{
  id:5,
  title:"House & Home",
  description:"Having problems finding new houses in Germany? We might help.",
  image: House,
},
{
  id:6,
  title:"Family & Pets",
  description:"We got your children, pets and family covered with our world class and most reliant services and offers.",
  image: Family,
},
{
  id:7,
  title:"Settling in & Moving out",
  description:"Settling in and Moving out of Germany has never been easier, want to know how?",
  image: Settling,
},
{
  id:8,
  title:"Expense Management",
  description:"Having a problem managing your expenses? Don't worry, we got you.",
  image: Expense,
},
{
  id:9,
  title:"Tax Return Online",
  description:"With the motto 'Taxes simple for everyone', our partner, WUNDERTAX, has developed into the leading provider of target group-oriented tax solutions. Simple, understandable and secure. Get your tax refund quickly and easily with WUNDERTAX tax program.",
  image: Tax,
},
{
  id:10,
  title:"Learn German For free",
  description:"With our services and our mission to make your life as easy as possible, we now provide you courses for each domain to learn German for free.",
  image: Learn,
},
] ;

const Services = () => {
  return (
    <>
      <div className='second-section'>
        <div className="inner-container">
              <div className="section-title">
                  <h2 >Our Services</h2>
              </div>
              <div className='outer-container'> 
              {data.map((card) => (
                <Card key={card.id} {...card} />
                ))}   
                <div className="right-container">
                  <h3>We are professional <span>Onboarding providing service</span></h3>
                  <p>We love to provide you our help and<br></br>we look forward to listening to your feedbacks and help us get better for the future.</p>
                  <button>Provide Feedback</button>
                  
                  </div>
                </div>
                
        </div>
      </div>
    </>
  )
}

const  Card = (data) =>{
  return (
    <>
            <div className="grid-section">
                <div className="service-icon">
                  <img src={data.image} alt="" />
                </div>
              <h3>{data.title}</h3>
                 <p>{data.description}.</p>
              <button>Read More</button>
            </div>
    
    


    
    </>
)  
}


export default Services