import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState(() => {
    try {
      const storedCart = localStorage.getItem("cart");
      const parsedCart = storedCart ? JSON.parse(storedCart) : [];
      return parsedCart.map((item) => ({
        ...item,
        quantity: item.quantity || 1,
        originalPrice: item.originalPrice || item.price * 1.25,
      }));
    } catch (err) {
      console.error("Error reading cart from localStorage", err);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

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
                src={item.image || "https://via.placeholder.com/120"}
                alt={item.name}
                className="cart-item-image"
              />
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-quantity">
                <button onClick={() => decrementQty(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => incrementQty(item.id)}>+</button>
              </div>
              <div className="cart-item-subtotal">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <span
                    style={{
                      textDecoration: "line-through",
                      color: "#999",
                      fontFamily: "Arial, sans-serif",
                      fontSize: "16px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    ₹{(item.originalPrice * item.quantity).toFixed(2)}
                  </span>
                  <span
                    style={{
                      fontWeight: "bold",
                      color: "#e74c3c",
                      fontFamily: "Arial, sans-serif",
                      fontSize: "16px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
              <div className="cart-item-remove">
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
            <h2>
              Total:{" "}
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontWeight: "bold",
                  fontFamily: "Arial, sans-serif",
                  fontSize: "18px",
                  color: "#e74c3c",
                }}
              >
                ₹{calculateTotal()}
              </span>
            </h2>
            <button
              className="checkout-btn"
              onClick={() => navigate("/checkout")}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
