import React from 'react'
import Slider from "react-slick";
import './homebanner.css';
import banner1 from '../../assets/banner/banner1.jpg'
import banner2 from '../../assets/banner/banner2.jpg'
import banner3 from '../../assets/banner/banner3.jpg'
import banner4 from '../../assets/banner/banner4.jpg'

import './homebanner.css'

const HomeBanner = () => {
  var bannerslider = {
   dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: true,   
  };
  return (
    <>

       <div className='homebannersection'>
      <div className='container-fluid p-0'>
      <div className='row'>
        <div className='col-lg-12'>
               <Slider {...bannerslider} >
                <div className='item'>
                    <img src={banner1} alt='Banner1' className='img-fluid w-100 rounded home-banner'/>
                </div>

                 <div className='item'>
                    <img src={banner2} alt='Banner2' className='img-fluid w-100 rounded home-banner'/>
                </div>
                 <div className='item'>
                    <img src={banner3} alt='Banner3' className='img-fluid w-100 rounded home-banner'/>
                </div>
                <div className='item'>
                    <img src={banner4} alt='Banner4' className='img-fluid w-100 rounded home-banner'/>
                </div>
                </Slider> 
      </div>
      </div>
      
</div> 
    </div>
    </>
  )
}

export default HomeBanner
