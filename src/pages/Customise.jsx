import React, { useState } from "react";
import "./Customise.css";
import Cat1 from '../assets/cat1.webp';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const products = [
  { id: 1, name: "Putharekulu 1", price: 50, img: "product1.jpg" },
  { id: 2, name: "Putharekulu 2", price: 60, img: "product2.jpg" },
  { id: 3, name: "Putharekulu 3", price: 70, img: "product3.jpg" },
  { id: 4, name: "Putharekulu 4", price: 80, img: "product4.jpg" },
  { id: 5, name: "Putharekulu 5", price: 90, img: "product5.jpg" },
  { id: 6, name: "Putharekulu 6", price: 100, img: "product6.jpg" },
  { id: 7, name: "Putharekulu 7", price: 110, img: "product7.jpg" },
  { id: 8, name: "Putharekulu 8", price: 120, img: "product8.jpg" },
  { id: 9, name: "Putharekulu 9", price: 130, img: "product9.jpg" },
  { id: 10, name: "Putharekulu 10", price: 140, img: "product10.jpg" },
];

const Customise = () => {
  const [selectedProducts, setSelectedProducts] = useState({});

  // Function to get total selected count
  const getTotalSelected = () => {
    return Object.values(selectedProducts).reduce((sum, count) => sum + count, 0);
  };

  const addProduct = (product) => {
    if (getTotalSelected() >= 10) {
      toast.error("You can't add more than 10 products!");
      return;
    }

    setSelectedProducts((prev) => {
      const updated = { ...prev, [product.id]: (prev[product.id] || 0) + 1 };

      if (getTotalSelected() + 1 === 10) {
        toast.success("Box is full! Proceed to checkout.");
      }

      return updated;
    });
  };

  const removeProduct = (product) => {
    setSelectedProducts((prev) => {
      const updated = { ...prev };
      if (updated[product.id] > 1) {
        updated[product.id] -= 1;
      } else {
        delete updated[product.id];
      }
      return updated;
    });
  };

  const getTotalPrice = () => {
    return Object.keys(selectedProducts).reduce(
      (total, productId) => total + products.find(p => p.id == productId).price * selectedProducts[productId], 
      0
    );
  };

  return (
    <div className="customise-container">
      {/* Left: Product Selection */}
      <div className="product-list">
        <h2>Select Your 10 Putharekulu</h2>
        <div className="products">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={Cat1} alt={product.name} />
              <h3>{product.name}</h3>
              <p>₹{product.price}</p>
              <div className="quantity-controls">
                <button onClick={() => removeProduct(product)}>-</button>
                <span>{selectedProducts[product.id] || 0}</span>
                <button onClick={() => addProduct(product)}>+</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Selected Products */}
      <div className="selected-products">
        <h2>Selected Items ({getTotalSelected()}/10)</h2>
        <ul>
          {Object.keys(selectedProducts).map((productId) => {
            const product = products.find((p) => p.id == productId);
            return (
              <li key={product.id}>
                {product.name} (x{selectedProducts[product.id]}) - ₹
                {product.price * selectedProducts[product.id]}
              </li>
            );
          })}
        </ul>
        <h3>Total: ₹{getTotalPrice()}</h3>
        <button className="buy-now" disabled={getTotalSelected() !== 10}>
          {getTotalSelected() === 10 ? "Proceed to Checkout" : "Select 10 to Buy"}
        </button>
      </div>
    </div>
  );
};

export default Customise;
