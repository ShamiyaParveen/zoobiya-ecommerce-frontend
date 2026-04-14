import React, { useContext } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import ProductItems from "../ProductItem/ProductItems";
import { MyContext } from "../../App";
import './bestseller.css';
import banner1 from '../../assets/banner/banner1.jpg'
import banner3 from '../../assets/banner/banner3.jpg'
import banner4 from '../../assets/banner/banner4.jpg'
import banner5 from '../../assets/banner/banner5.jpg'
import banner6 from '../../assets/banner/banner6.jpg'
import bestseller from '../../assets/images/bestseller.png'



// 10 video


const BestSeller = () => {
  const context = useContext(MyContext);
  const productcards = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  const productcardimg = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <>
      <section className="homeproduct bg-white">
        <div className="container">
          {/* Slider Row */}
          <div className="row">
            <div className="col-3 sticky-section  d-none d-lg-block">
              <div className="d-flex flex-column justify-content-center">
               <img
                src={bestseller}
                alt="Banner"
                className="img-fluid rounded mb-4 h-100"
              />
           
              </div>
             
            </div>
            <div className="col-lg-9 scroll-section col-12 ">
              <div className="row mb-4">
                <div className="col-12 col-lg-7">
                  <p className="text-left sub-heading">Do not miss</p>
                  <h2 className="section-title text-left">
                    Best <span className="gradient-text"> Sellers</span>
                  </h2>
                </div>
                <div className="col-12 col-lg-5 align-self-center">
                  <Link to="/" className="see-all-link float-right">
                    <Button>View all</Button>
                  </Link>
                </div>
              </div>
              <Slider {...productcards} className="product-slider">
                {context.bestSellerProducts.map((product) => (
                  <ProductItems key={product.id} product={product} />
                ))}
              </Slider>

             

              <div className="row">
                <div className="col-12">
                   <div className="pt-4">
               
                 <div className="discount-banner">
                  <div className="container d-flex justify-content-center align-items-center">
                    <div className="promo-text">
                      Super discount for your{" "}
                      <span className="promo-highlight">first purchase.</span>
                    </div>

                    <div className="coupon-code">FREE25BAC</div>

                    <div className="instruction-text">
                      Use discount code in checkout!
                    </div>
                  </div>
                </div>

              </div>
                </div>
                <div className="col-12 text-center mt-4">


                                <Slider {...productcardimg} className="product-slider">
               <img
                src={banner1}
                alt="Banner"
                className="img-fluid rounded-imgages rounded mt-4"
              />
               <img
                src={banner3}
                alt="Banner"
                className="img-fluid rounded-imgages rounded mt-4"
              />
               <img
                src={banner4}
                alt="Banner"
                className="img-fluid rounded-imgages rounded mt-4"
              />
               <img
                src={banner5}
                alt="Banner"
                className="img-fluid rounded-imgages rounded mt-4"
              />
                <img
                src={banner6}

                alt="Banner"
                className="img-fluid rounded-imgages rounded mt-4"
              />
                <img
                src={banner1}
                alt="Banner"
                className="img-fluid rounded-imgages rounded mt-4"
              />
              </Slider>


                 
                </div>
              </div>



          

            </div>

          </div>
        </div>
      </section>

      <section className="mb-0">
        <img src={banner5} alt="Banner"
        className="img-fluid "/>
      </section>
    </>
  );
};

export default BestSeller;
