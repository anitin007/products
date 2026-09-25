import React from 'react';

function Cart({ cartItems, onUpdateQuantity, onRemoveItem, onClearCart, onBackToProducts }) {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty-container">
        <h2>Your Cart is Empty</h2>
        <p>Looks like you haven't added any products to your cart yet.</p>
        <button className="back-btn" onClick={onBackToProducts}>
          Browse Products
        </button>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h2>Shopping Cart</h2>
        <button className="clear-cart-btn" onClick={onClearCart}>
          Clear Cart
        </button>
      </div>

      <div className="cart-items-list">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item-card">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-info">
              <h3 className="cart-item-name">{item.name}</h3>
              <p className="cart-item-category">{item.category}</p>
              <p className="cart-item-price">₹{item.price}</p>
            </div>
            <div className="cart-item-quantity">
              <button
                className="qty-btn"
                onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
              >
                -
              </button>
              <span className="qty-value">{item.quantity}</span>
              <button
                className="qty-btn"
                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
            </div>
            <div className="cart-item-subtotal">
              <p className="subtotal-label">Subtotal:</p>
              <p className="subtotal-amount">₹{item.price * item.quantity}</p>
            </div>
            <button
              className="remove-item-btn"
              onClick={() => onRemoveItem(item.id)}
              title="Remove item"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <div className="cart-summary-details">
          <h3>Total Price: <span className="total-amount">₹{calculateTotal()}</span></h3>
        </div>
        <div className="cart-actions">
          <button className="back-btn" onClick={onBackToProducts}>
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
