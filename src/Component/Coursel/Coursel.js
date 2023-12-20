import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import medical from '../Assests/medical.jpg'
import Family from '../Assests/family.jpg'
import Money from '../Assests/money_transfer.jpg'
import Home from '../Assests/home_insurance.jpg'
import Orientation from '../Assests/orientation.jpg'
import Expense from '../Assests/expense.jpg'
import './Coursel.css'


const data = [
  {
    id: 1,
    title: "Public Health Insurance",
    description: "Stay healthy and protected with our specialized health insurance for immigrants. Access quality care and enjoy peace of mind.",
    image: medical,  //extract  it from images folder
  },
  {
    id: 2,
    title: "Orientation",
    description: "We help the people to settle and establish themselves when coming to new country. Choose us so that you have teh process simplified.",
    image: Orientation,  //extract  it from images folder
  },
  {
    id: 3,
    title: "Family & Pets",
    description: "Get your family and pets insured and safeguarded by us even before traveling to the new country. Choose us so that you have teh process simplified.",
    image: Family,  //extract  it from images folder
  },
  {
    id: 4,
    title: "Expense Management",
    description: "Get a hold of your income and expenses by allowing us to help you in the best way possible. Choose us so that you have teh process simplified.",
    image: Expense,  //extract  it from images folder
  },
  {
    id: 5,
    title: "Home Insurance",
    description: "Protect your new home with specialized insurance coverage for immigrants. Safeguard your investment and peace of mind.",
    image: Home,  //extract  it from images folder
  },
  {
    id: 6,
    title: "Money Transfer",
    description: "Write me a 20 words advertising copy website section which talks about Health insurance services to immigrants.",
    image: Money,  //extract  it from images folder
  },
];

const Coursel = () => {
  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: false,
          speed: 2000,
          rows: 1,
          pauseOnHover: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: false,
          speed: 2000,
          rows: 1,
          pauseOnHover: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: false,
          speed: 2000,
          rows: 1,
          pauseOnHover: true,
        },
      },
    ],
  };


  return (
    <>
    <div className='fifth-section'>
        <div className="inner-container"> 
            <div className="section-title">
                <h2>Our Best Services</h2>
            </div>
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <div className="card">
              <div className="image-box">
                <img src={medical} alt="" />
              </div>
              <div className="content">
                <h5>Public Health Insurance</h5>
                <p>Stay healthy and protected with our specialized health insurance for immigrants. Access quality care and enjoy peace of mind.</p>
              </div>
            </div>
          </div>

          <div>
            <div className="card">
            <div className="image-box">
                <img src={Family} alt="" />
              </div>
              <div className="content">
                <h5>Famliy & Pets</h5>
                <p>Get your family and pets insured and safeguarded by us even before traveling to the new country. Choose us so that you have teh process simplified.</p>
              </div>
            </div>
          </div>

          <div>
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
          <div>
            <div className="card">
            <div className="image-box">
                <img src={Home} alt="" />
              </div>
              <div className="content">
                <h5>Home Insurance</h5>
                <p>Protect your new home with specialized insurance coverage for immigrants. Safeguard your investment and peace of mind.</p>
              </div>
            </div>
          </div>
          <div>
            <div className="card">
            <div className="image-box">
                <img src={Orientation} alt="" />
              </div>
              <div className="content">
                <h5>Orientation</h5>
                <p>We help the people to settle and establish themselves when coming to new country. Choose us so that you have teh process simplified.</p>
              </div>
            </div>
          </div>
          <div>
            <div className="card">
            <div className="image-box">
                <img src={Expense} alt="" />
              </div>
              <div className="content">
                <h5>Expense Management</h5>
                <p>Get a hold of your income and expenses by allowing us to help you in the best way possible. Choose us so that you have teh process simplified.</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      </div>
       </div> 

    </>
  )
}

export default Coursel