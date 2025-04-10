import React, { useState } from "react";
import "./Customise.css";
import Cat1 from '../assets/cat1.webp';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import products from './fake';

const Customise = () => {
  const [selectedProducts, setSelectedProducts] = useState({});

  const putharekuluProducts = products.filter((p) => p.category === "putharekulu");

  const getTotalSelected = () =>
    Object.values(selectedProducts).reduce((sum, count) => sum + count, 0);

  const addProduct = (product) => {
    setSelectedProducts((prev) => {
      const newCount = (prev[product.id] || 0) + 1;
      const newTotal = Object.values(prev).reduce((sum, count) => sum + count, 0) + 1;

      if (newTotal > 10) {
        toast.error("You can't add more than 10 products!");
        return prev;
      }

      const updated = { ...prev, [product.id]: newCount };

      if (newTotal === 10) {
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

  const getTotalPrice = () =>
    Object.keys(selectedProducts).reduce((total, productId) => {
      const product = products.find((p) => p.id === Number(productId));
      return total + product.price * selectedProducts[productId];
    }, 0);

  return (
    <div className="customise-container">
      <div className="product-list">
        <h2 className="text-center">Select Your 10 Putharekulu</h2>
        <div className="products">
          {putharekuluProducts.map((product) => (
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

      <div className="selected-products">
        <h2>Selected Items ({getTotalSelected()}/10)</h2>
        <ul>
          {Object.keys(selectedProducts).map((productId) => {
            const product = products.find((p) => p.id === Number(productId));
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
