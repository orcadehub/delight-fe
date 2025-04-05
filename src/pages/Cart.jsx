import React, { useState } from "react";
import "./Cart.css";
import Image from "../assets/top1.webp";
const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Wireless Headphones",
      price: 99.99,
      quantity: 1,
      image: "https://via.placeholder.com/120x120?text=Headphones",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 149.99,
      quantity: 2,
      image: "https://via.placeholder.com/120x120?text=Smart+Watch",
    },
  ]);

  const incrementQty = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQty = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={Image}
                alt={item.name}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Price: ₹{item.price.toFixed(2)}</p>
                <div className="quantity-controls">
                  <button onClick={() => decrementQty(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => incrementQty(item.id)}>+</button>
                </div>
                <p>Subtotal: ₹{(item.price * item.quantity).toFixed(2)}</p>
                <button
                  onClick={() => removeItem(item.id)}
                  className="remove-btn"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h2>Total: ₹{calculateTotal()}</h2>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
