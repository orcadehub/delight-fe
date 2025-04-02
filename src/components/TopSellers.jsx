import React from "react";
import "./TopSellers.css"; // Import the CSS file
import Top1 from '../assets/top1.webp';

const TopSellers = () => {
  // Array of top-selling products
  const topSellers = [
    { id: 1, name: "Wireless Headphones", price: 99.99, image: Top1 },
    { id: 2, name: "Smart Watch", price: 149.99, image: Top1 },
    { id: 3, name: "Gaming Mouse", price: 59.99, image: Top1 },
    { id: 4, name: "LED Lamp", price: 29.99, image: Top1 },
    { id: 5, name: "Bluetooth Speaker", price: 79.99, image: Top1 },
    { id: 6, name: "Fitness Tracker", price: 39.99, image: Top1 },
  ];

  // Duplicate the array to create an infinite scroll effect
  const infiniteProducts = [...topSellers, ...topSellers];

  // Function to handle adding to cart
  const handleAddToCart = (product) => {
    console.log(`${product.name} ($${product.price}) added to cart!`);
    // Replace this with your actual cart logic (e.g., Redux, Context API, etc.)
  };

  return (
    <div className="top-sellers-container">
      <h1>Top Sellers</h1>
      <div className="scroll-wrapper">
        <div className="products-track">
          {infiniteProducts.map((product) => (
            <div key={`${product.id}-${Math.random()}`} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>₹{product.price.toFixed(2)}</p>
              <button 
                className="add-to-cart-btn"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopSellers;