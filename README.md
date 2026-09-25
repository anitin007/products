# Product List

A simple React product listing application with a dedicated shopping cart view.

## Features

* Product listing
* Search products by name
* Category filtering
* Price sorting (Low to High & High to Low)
* Rating sorting (High to Low)
* Add to Cart functionality with console logging
* Interactive Shopping Cart icon badge in Navbar
* Dedicated Shopping Cart page for viewing added items, updating item quantities, calculating totals, and clearing items

## How to Run

```bash
npm install
npm run dev
```

## Project Structure Explanation

```
product-list/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Navigation bar with title, products link, and interactive Cart badge
│   │   ├── ProductCard.jsx  # Individual product card with details and Add to Cart button
│   │   ├── ProductList.jsx  # Renders grid of products or empty search result state
│   │   └── Cart.jsx         # Dedicated Shopping Cart view for added items, quantities, and totals
│   ├── data/
│   │   └── products.js      # Array of mock product objects (id, name, price, category, rating, image)
│   ├── App.jsx              # Application container managing state for products, filtering, search, and cart
│   ├── App.css              # Custom responsive styles for layout, product grid, and cart view
│   └── main.jsx             # React entry point
├── public/                  # Static assets and Netlify redirects config
├── package.json             # Project dependencies and script runner
├── netlify.toml             # Netlify deployment configuration
└── README.md                # Documentation and guide
```
