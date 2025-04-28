import React from "react";

/**
 * ProductCard Component
 *
 * Displays a product card with brand name, product title, description, sale price, discount, and original price.
 *
 */
const ProductCard = ({}) => {
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
    </div>
  );
};

export default ProductCard;
