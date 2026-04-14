import React, { useContext } from 'react'
import { FaCartPlus } from "react-icons/fa6";
import { MyContext } from '../../App';
import { useNavigate } from 'react-router-dom';
import './add-cart-button.css';

const AddCartButton = ({ product, quantity = 1 }) => {
  const context = useContext(MyContext);
  const navigate = useNavigate();
  const isInCart = context.cartItems.some((item) => item.id === product?.id);

  const handleAddToCart = () => {
    if (!product) {
      return;
    }

    if (isInCart) {
      navigate("/cart");
      return;
    }

    context.addToCart(product, quantity);
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate("/cart");
  };

  return (
    <>
    
    <div>
         <button
                        type="button"
                        className="add-to-cart-btn mr-2"
                        onClick={handleAddToCart}
                      >
                       <FaCartPlus className='mr-2'/> {isInCart ? "Go to Cart" : "Add to Cart"}
                      </button>
                        <button
                        type="button"
                        className="add-to-cart-btn1 mx-2"
                        onClick={handleBuyNow}
                      >
                        Buy Now
                      </button>
    </div>
    
    </>
  )
}

export default AddCartButton
