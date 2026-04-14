import React, { useContext } from 'react'
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { MyContext } from '../../App';
import './categories.css';

const Categories = () => {
      const context = useContext(MyContext);
      const cartegoryslider = {
    dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
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
    
      <section className="section-pad">
        <div className="container">
          <div className="row mb-4">
            <div className="col-lg-7">
              <p className="text-left sub-heading">All Categories</p>
              <h2 className="section-title text-left">Shop by <span className="gradient-text">Category</span></h2>
              </div>
               <div className="col-12 col-lg-5 align-self-center">
              <Link to='/' className="see-all-link float-right"><Button>View all</Button></Link>
              </div>
            </div>
         <div className="category-section">
  {context.productsLoading && <p className="status-message">Categories loading...</p>}
  {!context.productsLoading && !context.productsError && (
    <Slider {...cartegoryslider}>
      {context.topCategories.map((category) => (
        <div key={category.slug}>
          <Link to={`/cat/${category.slug}`} className="category-link">
            <div className="category-item">
              <div className="cat-img-box">
                <img
                  src={category.image}
                  alt={category.label}
                />
              </div>
              <h3 className="cat-title">{category.label}</h3>
              <p className="cat-count">{category.count} Products</p>
            </div>
          </Link>
        </div>
      ))}
    </Slider>
  )}
</div>

        </div>
      </section>
    
    </>
  )
}

export default Categories
