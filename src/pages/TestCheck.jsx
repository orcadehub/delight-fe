import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Checkout = () => {
  const [amount, setAmount] = useState(100);
  const history = useHistory();

  const handlePayment = async () => {
    try {
      const res = await axios.post("http://localhost:3002/pay", { amount });
      // Redirect user to PhonePe checkout page
      window.location.href = res.data.checkoutUrl;
    } catch (err) {
      alert("Payment Failed");
      history.push("/checkout"); // Redirect back to checkout page
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
