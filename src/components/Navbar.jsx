import React from 'react';

function Navbar({ cartCount, activeTab, setActiveTab }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1
          className="navbar-title"
          onClick={() => setActiveTab('products')}
          style={{ cursor: 'pointer' }}
        >
          Product List
        </h1>
        <div className="navbar-menu">
          <button
            className={`nav-btn ${activeTab === 'products' ? 'active' : ''}`}
            onClick={() => setActiveTab('products')}
          >
            Products
          </button>
          <button
            className={`cart-btn ${activeTab === 'cart' ? 'active' : ''}`}
            onClick={() => setActiveTab('cart')}
          >
            <span className="cart-icon">🛒</span>
            <span className="cart-text">Cart</span>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
