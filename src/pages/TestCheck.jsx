import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import config from "../config";
const Checkout = () => {
  const [amount, setAmount] = useState(100);
  const navigate = useNavigate();
  const baseURL =
  import.meta.env.MODE === "development"
    ? config.LOCAL_BASE_URL
    : config.BASE_URL;

  const handlePayment = async () => {
    try {
      const res = await axios.post(`${baseURL}/pay`, { amount });
      navigate('/success')
    } catch (err) {
      alert("Payment Failed");
      navigate("/checkout"); // Redirect back to checkout page
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">PhonePe Payment</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border p-2"
      />
      <button
        onClick={handlePayment}
        className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
      >
        Pay Now
      </button>
    </div>
  );
};

export default Checkout;
