# Product List

A simple React product listing application.

## Features

* Product listing
* Search products
* Category filtering
* Price sorting
* Rating sorting
* Add to Cart console functionality

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
│   │   ├── Navbar.jsx       # Renders the top navigation bar with site title
│   │   ├── ProductCard.jsx  # Renders an individual product item with details and Add to Cart button
│   │   └── ProductList.jsx  # Maps over products array and renders ProductCard components
│   ├── data/
│   │   └── products.js      # Array of mock product objects (id, name, price, category, rating, image)
│   ├── App.jsx              # Main application component managing state for search, category, and sorting
│   ├── App.css              # Custom styling for layout, components, and responsive grid
│   └── main.jsx             # React entry point rendering the App component into the DOM
├── public/                  # Public static assets
├── package.json             # Dependencies and scripts configuration
└── README.md                # Project documentation and guide
```

* **`App.jsx`**: Controls application state using `useState`. Performs array operations (`filter` and `sort`) to refine the displayed product list dynamically based on user input.
* **`Navbar.jsx`**: Simple navigation header component.
* **`ProductList.jsx`**: Responsible for grid layout and handling zero-results state.
* **`ProductCard.jsx`**: Visual presentation card for products. Contains the button click handler to log `Added to cart: [Product Name]` to the console.
