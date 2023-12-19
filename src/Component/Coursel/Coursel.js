import React from 'react'
import medical from '../Assests/medical.jpg'
import Family from '../Assests/family.jpg'
import Money from '../Assests/money_transfer.jpg' 
import Home from '../Assests/home_insurance.jpg'

const Coursel = () => {
    return (

        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">

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

                <div class="carousel-item">
                    {/* <img src="..." class="d-block w-100" alt="..." /> */}

                    <div className="card">
                        <div className="image-box">
                            <img src={Home} alt="" />
                        </div>
                        <div className="content">
                            <h5>Home Insurance</h5>
                            <p>Write me a 20 words advertising copy website section which talks about Health insurance services to immigrants.</p>
                         </div>
                    </div>


                </div>
                <div class="carousel-item">
                    {/* <img src="..." class="d-block w-100" alt="..." /> */}


                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
      </div>  





    )
}

export default Coursel