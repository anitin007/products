import React from 'react';

function ProductCard({ product, onAddToCart }) {
  const handleAddToCart = () => {
    console.log(`Added to cart: ${product.name}`);
    if (onAddToCart) {
      onAddToCart(product);
    }
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
        <span className="product-category">{product.category}</span>
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <div className="product-details">
          <span className="product-price">₹{product.price}</span>
          <span className="product-rating">⭐ {product.rating}</span>
        </div>
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
