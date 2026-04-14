import React, { useContext } from 'react';
import { FaTimes } from 'react-icons/fa';
import { 
  Button, 
  TextField, 
  LinearProgress, 
  Radio, 
  RadioGroup, 
  FormControlLabel, 
  Divider} from '@mui/material';
import Rating from "@mui/material/Rating";
import ProductQuantity from '../../Component/ProductQuantity/ProductQuantity';
import { MyContext } from '../../App';
import './cart.css';



const Cart = () => {
  const context = useContext(MyContext);
  const cartItems = context.cartItems;

  // --- Calculations ---
  const subtotal = context.cartSubtotal;
  const shippingCost = context.shippingCost;
  const total = context.cartTotal;
  const freeShippingThreshold = 50.00;
  const neededAmount = Math.max(0, freeShippingThreshold - subtotal).toFixed(2);
  const progressValue = Math.min((subtotal / freeShippingThreshold) * 100, 100);

  return (
    <div className="container py-5 ">
      {/* 1. Breadcrumb */}
      <div className="breadcrumb">
        HOME &nbsp; &gt; &nbsp; <span className="text-secondary">CART</span>
      </div>

      <div className="row">
        {/* ================= LEFT COLUMN: CART ITEMS ================= */}
        {/* Uses col-lg-8 (66% width on large screens), full width on mobile */}
        <div className="col-lg-8 mb-4">
          
          {/* Free Shipping Notice */}
          <div className="free-shipping-box mb-4">
            <p  className="mb-3 text-secondary">
              Add <span className="fw-bold" style={{ color: '#e91e63' }}>${neededAmount}</span> to cart and get free shipping!
            </p>
            <LinearProgress
              variant="determinate" 
              value={progressValue} 
              className="shipping-progress"
            />
          </div>



        
            <div className='card'>
               <div className='card-body'>
 {/* Table Header (Desktop Only) */}
          {/* d-none (Hidden on Mobile) | d-md-flex (Visible on Tablet+) */}
          <div className="d-none d-md-flex row cart-header">
            <div className="col-md-5 pl-4">Product</div>
            <div className="col-md-2 text-center">Price</div>
            <div className="col-md-3 text-center">Quantity</div>
            <div className="col-md-2 text-end pe-4">Subtotal</div>
          </div>

          {/* Cart Items List */}
          {cartItems.length === 0 && (
            <div className="py-5 text-center">
              <h5>Your cart is empty</h5>
              <p className="text-muted mb-0">Add products from the shop page to see them here.</p>
            </div>
          )}

          {cartItems.map((item) => (
            <div key={item.id} className="row align-items-center cart-item-row flex-nowrap">
              
              {/* Product Image & Name */}
              {/* col-md-6 (50% on desktop) | Full width on mobile */}
              <div className="col-md-5 d-flex align-items-center mb-3 mb-md-0 ps-md-4">
                <div className="img-wrapper">
                  <img src={item.thumbnail} alt={item.title} />
                </div>
                <div className='d-flex flex-column'>
                <span className="product-name">{item.title}</span>
                  <div>
                           <Rating name="read-only" value={item.rating || 0} readOnly precision={0.5} size="small" />
                         </div>
                         </div>
              </div>

              {/* Price */}
              {/* col-md-2 (desktop) | col-4 (mobile) */}
              <div className="col-md-2 col-4 text-md-center text-muted fw-bold">
                ${item.price.toFixed(2)}
              </div>
              <div className='col-md-3 col-4 d-flex justify-content-center align-items-center pro-quant'>
                <ProductQuantity
                  value={item.quantity}
                  onChange={(newValue) => {
                    const actionType = newValue > item.quantity ? "increase" : "decrease";
                    context.updateCartQuantity(item.id, actionType);
                  }}
                />
                </div>
              {/* Subtotal & Remove */}
              {/* col-md-2 (desktop) | col-4 (mobile) */}
              <div className="col-md-2 col-4 d-flex justify-content-end align-items-center pr-md-4">
                <span className="fw-bold mr-4 text-dark">${(item.price * item.quantity).toFixed(2)}</span>
                <FaTimes className="remove-icon" onClick={() => context.removeCartItem(item.id)} />
              </div>
            </div>
          ))}

          {/* Coupon and Remove All Buttons */}
          <div className="row mt-4 pt-2">
            {/* Input Section: Stacked on mobile, side-by-side on desktop */}
            <div className="col-md-8 d-flex mb-3 mb-md-0">
              <TextField 
                variant="outlined" 
                placeholder="Coupon code" 
                size="small" 
                fullWidth
                className="coupon-input"
                sx={{ mr: 2 }}
              />
              <Button variant="contained" disableElevation className="btn-blue">
                Apply coupon
              </Button>
            </div>
            
            {/* Remove Button Section */}
            <div className="col-md-4 text-end">
              <Button variant="contained" disableElevation className="btn-blue" onClick={context.clearCart}>
                Remove All
              </Button>
            </div>
          </div>
            </div>
         </div>
        </div>

        {/* ================= RIGHT COLUMN: CART TOTALS ================= */}
        {/* Uses col-lg-4 (33% width on large screens), full width on mobile */}
        <div className="col-lg-4">
          <div className="cart-totals-box">
            <h6 className="totals-title">Cart Totals</h6>
            
            <div className="d-flex justify-content-between mb-3 align-items-center">
              <span className="text-muted fw-bold" style={{ fontSize: '0.9rem' }}>Subtotal</span>
              <span className="fw-bold text-dark" style={{ fontSize: '1rem' }}>${subtotal}</span>
            </div>

            <Divider className="mb-3" />

            <div className="mb-3">
              <span className="text-muted fw-bold mb-2 d-block" style={{ fontSize: '0.9rem' }}>Shipping</span>
              
              <RadioGroup defaultValue="flat" name="shipping-group">
                {/* Flat Rate Option */}
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <FormControlLabel 
                    value="flat" 
                    control={<Radio size="small" className="radio-teal" />} 
                    label={<span className="shipping-label">Flat rate:</span>} 
                    className="m-0"
                  />
                  <span className="text-danger fw-normal" style={{ fontSize: '0.9rem' }}>${shippingCost.toFixed(2)}</span>
                </div>
                
                {/* Local Pickup Option */}
                <div className="d-flex justify-content-between align-items-center">
                  <FormControlLabel 
                    value="local" 
                    control={<Radio size="small" className="radio-teal" />} 
                    label={<span className="shipping-label">Local pickup</span>} 
                    className="m-0"
                  />
                </div>
              </RadioGroup>
              
              <div className="mt-3 text-end">
                <p className="mb-1 text-muted" style={{ fontSize: '0.85rem' }}>Shipping to <strong>AL</strong>.</p>
                <a href="#!" className="change-address-link">Change address</a>
              </div>
            </div>

            <Divider className="mb-4" />

            <div className="d-flex justify-content-between align-items-center mb-4">
              <span className="text-muted fw-bold" style={{ fontSize: '0.9rem' }}>Total</span>
              <span className="fw-bold fs-4 text-dark">${total}</span>
            </div>

            <Button fullWidth variant="contained" className="btn-checkout">
              Proceed to checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
