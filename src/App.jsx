import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import initialProducts from './data/products';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [sortBy, setSortBy] = useState('default');
  const [cart, setCart] = useState([]);
  const [activeTab, setActiveTab] = useState('products');

  // Handle adding product to cart
  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Update item quantity in cart
  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(productId);
    } else {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  // Remove single item from cart
  const handleRemoveItem = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Clear all items from cart
  const handleClearCart = () => {
    setCart([]);
  };

  // Calculate total items count in cart
  const totalCartCount = cart.reduce((total, item) => total + item.quantity, 0);

  // Filter products by category and search text
  const filteredProducts = initialProducts.filter((product) => {
    const matchesCategory =
      selectedCategory === 'All Categories' || product.category === selectedCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort filtered products based on selected option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') {
      return a.price - b.price;
    } else if (sortBy === 'price-high') {
      return b.price - a.price;
    } else if (sortBy === 'rating-high') {
      return b.rating - a.rating;
    }
    return 0;
  });

  return (
    <div className="app">
      <Navbar
        cartCount={totalCartCount}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <main className="container">
        {activeTab === 'products' ? (
          <>
            <header className="header">
              <h2>Our Products</h2>
              <p>Browse our products and find what you need.</p>
            </header>

            <div className="controls-section">
              <div className="control-group">
                <label htmlFor="search-input">Search:</label>
                <input
                  id="search-input"
                  type="text"
                  placeholder="Search products by name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
              </div>

              <div className="control-group">
                <label htmlFor="category-select">Category:</label>
                <select
                  id="category-select"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="select-input"
                >
                  <option value="All Categories">All Categories</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Footwear">Footwear</option>
                  <option value="Clothing">Clothing</option>
                  <option value="Accessories">Accessories</option>
                </select>
              </div>

              <div className="control-group">
                <label htmlFor="sort-select">Sort By:</label>
                <select
                  id="sort-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="select-input"
                >
                  <option value="default">Default</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating-high">Rating: High to Low</option>
                </select>
              </div>
            </div>

            <ProductList
              products={sortedProducts}
              onAddToCart={handleAddToCart}
            />
          </>
        ) : (
          <Cart
            cartItems={cart}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
            onClearCart={handleClearCart}
            onBackToProducts={() => setActiveTab('products')}
          />
        )}
      </main>
    </div>
  );
}

export default App;
