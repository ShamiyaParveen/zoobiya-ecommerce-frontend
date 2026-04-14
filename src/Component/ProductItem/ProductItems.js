import React, { useContext } from 'react'
import { TfiFullscreen } from "react-icons/tfi";
import { FaRegHeart } from "react-icons/fa";
import Rating from "@mui/material/Rating";
import { MyContext } from '../../App';
import { Link, useNavigate } from 'react-router-dom';


const ProductItems = (props) => {
 const context  = useContext(MyContext);
 const navigate = useNavigate();
 const product = props.product;
 const isInCart = context.cartItems.some((item) => item.id === product?.id);

 if (!product) {
  return null;
 }

 const handleCartAction = () => {
  if (isInCart) {
    navigate("/cart");
    return;
  }

  context.addToCart(product);
 };

  return (
    <>
    <div className={`product-slide ${props.itemView} p-2`}>
  <div className="card-focus">

    {/* IMAGE SECTION */}
    <div className="focus-image-container">
      <div className="discount-badge">-{Math.round(product.discountPercentage || 0)}%</div>

      <Link to={`/product/${product.id}`}>
        <img
          src={product.thumbnail}
          alt={product.title}
        />
      </Link>

      <div className="focus-actions">
        <span>
          <FaRegHeart />
        </span>
        <span onClick={() => context.openProductModal(product)}>
          <TfiFullscreen />
        </span>
      </div>
    </div>

    {/* CONTENT SECTION */}
    <div className="focus-content">
      <Link to={`/product/${product.id}`} className="product-card-link">
        <h4 className="focus-title">
          {product.title}
        </h4>
      </Link>
      <span className="focus-stock text-success">
        {product.stock > 0 ? "In Stock" : "Out of Stock"}
      </span>
      <div className="focus-price-row">
        <div className="focus-price">${product.price}</div>
        <div>
          <Rating name="read-only" value={product.rating || 0} readOnly precision={0.5} size="small" />
        </div>
      </div>

      <button className="focus-btn" onClick={handleCartAction}>
        {isInCart ? "Go to Cart" : "Add to Cart"}
      </button>
    </div>

  </div>
</div>

    


    </>
  )
}

export default ProductItems
