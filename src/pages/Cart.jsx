import React, { useState, useEffect } from "react";
import "./Cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const storedCart = localStorage.getItem("cart");
      const parsedCart = storedCart ? JSON.parse(storedCart) : [];
      return parsedCart.map((item) => ({
        ...item,
        quantity: item.quantity || 1,
      }));
    } catch (err) {
      console.error("Error reading cart from localStorage", err);
      return [];
    }
  });

  // Update localStorage when cartItems change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const incrementQty = (name) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.name === name ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQty = (name) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.name === name && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (name) => {
    const updatedCart = cartItems.filter((item) => item.name !== name);
    setCartItems(updatedCart);
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
          {cartItems.map((item, index) => (
            <div key={`${item.name}-${index}`} className="cart-item">
              <img
                src={item.image || "https://via.placeholder.com/120"}
                alt={item.name}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Price: ₹{item.price.toFixed(2)}</p>
                <div className="quantity-controls">
                  <button onClick={() => decrementQty(item.name)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => incrementQty(item.name)}>+</button>
                </div>
                <p>Subtotal: ₹{(item.price * item.quantity).toFixed(2)}</p>
                <button
                  onClick={() => removeItem(item.name)}
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
