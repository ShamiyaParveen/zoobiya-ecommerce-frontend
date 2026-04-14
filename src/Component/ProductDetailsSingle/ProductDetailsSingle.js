import React, { useMemo, useState } from 'react'
import { FaRegHeart } from "react-icons/fa";
import Rating from "@mui/material/Rating";
import './product-details-single.css';


const ProductDetailsSingle = ({ product }) => {
     const [activeSize, setActiveSize] = useState(null);
     const productSizes = useMemo(() => ["Small", "Medium", "Large", "XL"], []);

        const isActive = (index) => {
            setActiveSize(index);
        }

        if (!product) {
          return null;
        }

  return (
    <>
    
      <div className="product-details">
            <h2 className="product-title">
              {product.title}
            </h2>

             <div className="brand-info mb-2">
                <span className="label">Brand:</span>
                <span className="value">{product.brand || "DummyJSON"}</span>
              </div>


            <div className="row py-2 pr-4  d-flex justify-content-between align-items-center">
              
              <div className="review-info">
                <Rating name="read-only" value={product.rating || 0} readOnly precision={0.5} size="small" />
                <span className="review-count">({product.rating} Rating)</span>
              </div>
              <div className="row pr-5">
              <button className="icon-text-btn">
                <FaRegHeart size={18} /> 
              </button>
             
            </div>

            </div>

            <div className="price-wrapper">
              <span className="old-price">
                ${Math.round(product.price + product.price * ((product.discountPercentage || 0) / 100))}
              </span>
              <span className="new-price">${product.price}</span>
              <span className="stock-status in-stock">
                {product.stock > 0 ? "IN STOCK" : "OUT OF STOCK"}
              </span>
            </div>

            <p className="description">
              {product.description}
            </p>


            <div className="productSize d-flex align-items-center mb-3">
              <span>Size / Weight:</span>

              <ul className="list list-inline mb-0 pl-4">
                {productSizes.map((size, index) => (
                  <li className="list-inline-item" key={size}>
                    <button
                      type="button"
                      className={`tag tag-button ${activeSize === index ? 'active' : ''}`}
                      onClick={() => isActive(index)}
                    >
                      {size}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
              </div>
                     


                    
            
    
    </>
  )
}

export default ProductDetailsSingle;
