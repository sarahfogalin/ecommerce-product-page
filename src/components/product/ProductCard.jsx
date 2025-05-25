import React, { useState } from "react";

const QuantitySelector = ({ onDecrement, onIncrement, quantity }) => (
  <div className="quantity-selector-container">
    <button
      type="button"
      onClick={onDecrement}
      aria-label="Decrease quantity"
      disabled={quantity === 1}
    >
      <img
        src="/images/icon-minus.svg"
        alt="decrement"
        className={`decrement-icon ${quantity === 1 ? "disabled" : ""}`}
      />
    </button>
    <span className="quantity">{quantity}</span>
    <button type="button" onClick={onIncrement} aria-label="Increase quantity">
      <img
        src="/images/icon-plus.svg"
        alt="increment"
        className="increment-icon"
      />
    </button>
  </div>
);

/**
 * ProductCard Component
 *
 * Displays a product card with brand name, product title, description, sale price, discount, and original price.
 *
 */
const ProductCard = ({}) => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => setQuantity(quantity - 1);

  const handleIncrement = () => setQuantity(quantity + 1);

  return (
    <div className="card">
      <p className="company-title">SNEAKER COMPANY</p>
      <h1>Fall Limited Edition Sneakers</h1>
      <p className="product-description">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div className="sale-price-container">
        <span className="sale-price">$125.00</span>
        <span className="discount">50%</span>
      </div>
      <span className="original-price">$250.00</span>

      {
        <QuantitySelector
          onDecrement={handleDecrement}
          onIncrement={handleIncrement}
          quantity={quantity}
        />
      }

      <div className="add-to-cart-button">
        <img src="/images/icon-cart.svg" alt="cart" className="cart-icon" />
        Add to cart
      </div>
    </div>
  );
};

export default ProductCard;
