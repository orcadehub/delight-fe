import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./CheckOut.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify"; // Importing toastify
import "react-toastify/dist/ReactToastify.css"; // Importing the toastify CSS
import config from "../config";
const Checkout = () => {
  const [address, setAddress] = useState({
    name: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    zip: "",
  });
  const baseURL =
  import.meta.env.MODE === "development"
    ? config.LOCAL_BASE_URL
    : config.BASE_URL;

  const [savedAddresses, setSavedAddresses] = useState([]);
  const [selectedAddressIndex, setSelectedAddressIndex] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const navigate = useNavigate(); 

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("addresses")) || [];
    setSavedAddresses(saved);

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);

  useEffect(() => {
    const total = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotalAmount(total.toFixed(2));
  }, [cartItems]);

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleSaveAddress = () => {
    const updated = [...savedAddresses, address];
    setSavedAddresses(updated);
    localStorage.setItem("addresses", JSON.stringify(updated));
    setAddress({
      name: "",
      phone: "",
      street: "",
      city: "",
      state: "",
      zip: "",
    });
  };

  const handlePayment = async () => {
    // Check if an address is selected
    if (selectedAddressIndex === null) {
      toast.error("Please select an address before proceeding to payment."); // Show error toast
      return; // Prevent further execution
    }

    const selectedAddress = savedAddresses[selectedAddressIndex];

    const orderDetails = {
      address: selectedAddress,
      cartItems,
      total: totalAmount,
      paymentMode: "PhonePe",
      date: new Date().toLocaleString(),
      MUID: "MUID" + Date.now(),
      transactionId: "T" + Date.now(),
      name: selectedAddress.name,
      phone: selectedAddress.phone,
    };

    localStorage.setItem("order", JSON.stringify(orderDetails));

    try {
      const response = await axios.post(`${baseURL}/pay`, {
        amount: Math.round(parseFloat(totalAmount) * 100),
      });

      if (response.data.paymentStatus === "success") {
        // Redirect to success page if payment is successful
        navigate("/success");
      } else {
        // Redirect back to checkout if payment failed
        navigate("/checkout");
      }

      if (response.data.checkoutUrl) {
        window.location.href = response.data.checkoutUrl;
      }
    } catch (error) {
      console.error("Payment Error:", error);
      alert("Payment Failed. Please try again.");
      // Redirect back to checkout page if payment fails
      navigate("/checkout");
    }
  };

  return (
    <div className="checkout-page-container">
      <div className="checkout-left-section">
        <h2>Delivery Address</h2>
        <div className="checkout-form-container">
          <input
            name="name"
            value={address.name}
            onChange={handleChange}
            placeholder="Full Name"
          />
          <input
            name="phone"
            value={address.phone}
            onChange={handleChange}
            placeholder="Phone Number"
          />
          <input
            name="street"
            value={address.street}
            onChange={handleChange}
            placeholder="Street Address"
          />
          <input
            name="city"
            value={address.city}
            onChange={handleChange}
            placeholder="City"
          />
          <input
            name="state"
            value={address.state}
            onChange={handleChange}
            placeholder="State"
          />
          <input
            name="zip"
            value={address.zip}
            onChange={handleChange}
            placeholder="ZIP Code"
          />
          <button className="checkout-save-btn" onClick={handleSaveAddress}>
            Save Address
          </button>
        </div>

        {savedAddresses.length > 0 && (
          <div className="checkout-saved-addresses">
            <h3>Select Saved Address</h3>
            {savedAddresses.map((addr, idx) => (
              <div
                key={idx}
                className={`checkout-address-card ${
                  selectedAddressIndex === idx ? "selected" : ""
                }`}
                onClick={() => setSelectedAddressIndex(idx)}
              >
                <p>
                  {addr.name}, {addr.phone}
                </p>
                <p>
                  {addr.street}, {addr.city}
                </p>
                <p>
                  {addr.state} - {addr.zip}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="checkout-right-summary">
        <h3>Order Summary</h3>
        {cartItems.map((item, idx) => (
          <div key={idx} className="checkout-order-item">
            <span>
              {item.name} x {item.quantity}
            </span>
            <span>₹{(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
        <hr />
        <div className="checkout-total">
          <strong>Total:</strong>
          <span>₹{totalAmount}</span>
        </div>
        <button
          className="checkout-proceed-btn"
          onClick={handlePayment}
        >
          Proceed to Payment
        </button>
      </div>

      <ToastContainer /> {/* Toast container for displaying toast messages */}
    </div>
  );
};

export default Checkout;
