import React, { useContext } from 'react'
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import ProductItems from './ProductItems';
import { MyContext } from '../../App';
import './product-item.css';


const Products = (props) => {
    const context = useContext(MyContext);
    const sectionTitle = props.title || "Featured";
    const productcards = {
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

  const sectionProducts =
    props.products ||
    (props.title === "Related"
      ? context.featuredProducts
      : props.title === "Recently Viewed"
      ? context.bestSellerProducts
      : context.featuredProducts);

  return (
    <>
         <section className="homeproduct">
  <div className="container">
    
  <div className="row mb-4">
            <div className="col-12 col-lg-7">
              <p className="text-left sub-heading">Our Shop</p>
              <h2 className="section-title text-left">  {sectionTitle} <span className="gradient-text">Products</span></h2>
              </div>
               <div className="col-12 col-lg-5 align-self-center">
              <Link to='/cat/all' className="see-all-link float-right"><Button>View all</Button></Link>
              </div>
            </div>

    {context.productsLoading && <p className="status-message">Products loading...</p>}
    {!context.productsLoading && context.productsError && (
      <p className="status-message error-message">{context.productsError}</p>
    )}

    {!context.productsLoading && !context.productsError && (
      <div className="row">
        <div className="col-12">
          <Slider {...productcards} className="product-slider">
            {sectionProducts.map((product) => (
              <ProductItems key={product.id} product={product} />
            ))}
          </Slider>
        </div>
      </div>
    )}
  </div>
</section>
    </>
  )
}

export default Products
