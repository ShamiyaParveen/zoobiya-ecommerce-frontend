import React from 'react';
import './about.css';
import banner5 from '../../assets/banner/banner5.jpg'


const About = () => {
  return (
    <>

      <div className="container aboutsection py-5">
        <div className="row align-items-center">
          {/* LEFT COLUMN: Marketing Text */}
          <div className="col-12 col-lg-7 text-content pe-lg-5">

               <div className="row mb-2">
                <div className="col-lg-12">
                  <p className="text-left sub-heading">Do not miss</p>
                  <h2 className="section-title text-left">
                    Best <span className="gradient-text"> Sellers</span>
                  </h2>
                </div>
              
              </div>

            <div className="feature-block">
              <p className="feature-desc text-dark">
               Explore curated fashion, beauty, and lifestyle products in a clean shopping experience designed for fast browsing and easy discovery.
              </p>
              <p className="feature-desc text-dark">
               This frontend highlights responsive design, API-driven product data, category navigation, and cart interactions in a format that stays simple to explain in interviews.
              </p>
            </div>
           
          </div>

          {/* RIGHT COLUMN: Interactive Card */}
          <div className="col-12 col-lg-5">
            <div className="product-card-container">
            <img src={banner5} alt="Product" className="product-image img-fluid w-100 rounded" />
             

            
            </div>
          </div>
          {/* END RIGHT COLUMN */}
        </div>
      </div>
    </>
  );
};

export default About;
