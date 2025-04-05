import React, { useEffect, useRef } from "react";
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

  // Duplicating the product list to create a seamless infinite effect
  const infiniteProducts = [...topSellers, ...topSellers];

  // Scroll Animation Logic
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let scrollAmount = 0;

    const scroll = () => {
      scrollAmount += 1; // Adjust speed
      if (scrollAmount >= track.scrollWidth / 2) {
        scrollAmount = 0; // Reset to loop seamlessly
      }
      track.style.transform = `translateX(-${scrollAmount}px)`;
      requestAnimationFrame(scroll);
    };

    scroll(); // Start animation
  }, []);

  // Function to handle adding to cart
  const handleAddToCart = (product) => {
    console.log(`${product.name} (₹${product.price.toFixed(2)}) added to cart!`);
  };

  return (
    <div className="top-sellers-container">
      <h1>Top Sellers</h1>
      <div className="scroll-wrapper">
        <div className="products-track" ref={trackRef}>
          {infiniteProducts.map((product, index) => (
            <div key={`${product.id}-${index}`} className="product-card">
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
