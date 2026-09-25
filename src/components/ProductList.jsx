import React from 'react';
import ProductCard from './ProductCard';

function ProductList({ products, onAddToCart }) {
  if (products.length === 0) {
    return (
      <div className="no-products">
        <p>No products found matching your search and filter criteria.</p>
      </div>
    );
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}

export default ProductList;
