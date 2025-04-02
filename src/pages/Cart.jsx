import React from "react";
import "./Cart.css"; // Import the CSS file

const Cart = () => {
  // For now, this is a static cart; you can integrate with state management later
  const cartItems = [
    { id: 1, name: "Wireless Headphones", price: 99.99, quantity: 1 },
    { id: 2, name: "Smart Watch", price: 149.99, quantity: 2 },
  ];

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
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
              <h3>{item.name}</h3>
              <p>Price: ₹{item.price.toFixed(2)}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Subtotal: ₹{(item.price * item.quantity).toFixed(2)}</p>
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