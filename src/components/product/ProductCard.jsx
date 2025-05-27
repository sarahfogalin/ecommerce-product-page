import React, { useState } from "react";

import CartIcon from "../icons/CartIcon";

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
    <button
      type="button"
      onClick={onIncrement}
      aria-label="Increase quantity"
      disabled={quantity >= 3}
    >
      <img
        src="/images/icon-plus.svg"
        alt="increment"
        className={`increment-icon ${quantity >= 3 ? "disabled" : ""}`}
      />
    </button>
  </div>
);

// to do: add functionality
const AddToCart = () => (
  <button className="add-to-cart-button">
    <CartIcon width={17} height={16} />
    Add to cart
  </button>
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

      <div className="add-to-cart-container">
        {
          <QuantitySelector
            onDecrement={handleDecrement}
            onIncrement={handleIncrement}
            quantity={quantity}
          />
        }

        {<AddToCart />}
      </div>
    </div>
  );
};

export default ProductCard;
