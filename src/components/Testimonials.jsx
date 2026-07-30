import React from "react";
import "../assets/styles/Testimonials.css";

import { FaStar } from "react-icons/fa";


const testimonialsData = [
  {
    name: "Michael Anderson",
    role: "Property Buyer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text:
      "LuxeEstate made finding my dream home so easy. The process was smooth and the agents were extremely professional.",
  },

  {
    name: "Sarah Williams",
    role: "Home Owner",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text:
      "I sold my property faster than expected. The team provided excellent support from start to finish.",
  },

  {
    name: "David Johnson",
    role: "Real Estate Investor",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    text:
      "The properties listed here are high quality. I have invested in multiple properties through LuxeEstate.",
  },
];


function Testimonials(){

    return(

        <section className="testimonials" id="testimonials">

            <div className="testimonial-header">

                <span>CLIENT REVIEWS</span>

                <h2>
                    What Our Clients Say
                </h2>

                <p>
                    Trusted by thousands of homeowners and investors worldwide.
                </p>

            </div>



            <div className="testimonial-container">


            {
                testimonialsData.map((item,index)=>(

                    <div className="testimonial-card" key={index}>


                        <div className="user">

                            <img 
                            src={item.image}
                            alt={item.name}
                            />

                            <div>

                                <h3>
                                    {item.name}
                                </h3>

                                <p>
                                    {item.role}
                                </p>

                            </div>


                        </div>



                        <p className="review">
                            {item.text}
                        </p>



                        <div className="stars">

                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>

                        </div>



                    </div>


                ))
            }


            </div>


        </section>

    );

}


export default Testimonials;