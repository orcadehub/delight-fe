import React, { useEffect, useState } from "react";
import "./Customise.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import products from "./fake";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import config from "../config";

const Customise = () => {
  const [selectedProducts, setSelectedProducts] = useState({});
  const [totalAmount, setTotalAmount] = useState(0);
  const navigate = useNavigate();

  const baseURL =
  import.meta.env.MODE === "development"
    ? config.LOCAL_BASE_URL
    : config.BASE_URL;

  const putharekuluProducts = products.filter(
    (p) => p.category === "putharekulu"
  );

  // Restore from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("selectedProducts");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        const updated = {};
        Object.keys(parsed).forEach((key) => {
          updated[parseInt(key)] = parsed[key];
        });
        setSelectedProducts(updated);
      } catch (e) {
        console.error("Failed to parse localStorage data", e);
      }
    }
  }, []);

  // Store to localStorage when selectedProducts changes
  useEffect(() => {
    localStorage.setItem("selectedProducts", JSON.stringify(selectedProducts));
    setTotalAmount(getTotalPrice());
  }, [selectedProducts]);

  const getTotalSelected = () =>
    Object.values(selectedProducts).reduce((sum, count) => sum + count, 0);

  const addProduct = (product) => {
    setSelectedProducts((prev) => {
      const newCount = (prev[product.id] || 0) + 1;
      const newTotal =
        Object.values(prev).reduce((sum, count) => sum + count, 0) + 1;

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

  const clearAll = () => {
    setSelectedProducts({});
    localStorage.removeItem("selectedProducts");
    toast.info("All selections cleared!");
  };

  const getTotalPrice = () =>
    Object.keys(selectedProducts).reduce((total, productId) => {
      const product = products.find((p) => p.id === Number(productId));
      if (!product) return total;
      return total + (product.price / 10) * selectedProducts[productId];
    }, 0);

  const handlePayment = async () => {
    // Check if exactly 10 items are selected
    if (getTotalSelected() !== 10) {
      toast.error("Please select exactly 10 products before proceeding.");
      return;
    }

    // Create order details
    const orderDetails = {
      cartItems: selectedProducts,
      total: totalAmount,
      paymentMode: "PhonePe",
      date: new Date().toLocaleString(),
      transactionId: "T" + Date.now(),
    };

    localStorage.setItem("order", JSON.stringify(orderDetails));

    try {
      // Call the payment API directly
      const response = await axios.post(`${baseURL}/pay`, {
        amount: Math.round(totalAmount * 100), // Convert to paise
      });

      // Handle the response based on payment status
      if (response.data.paymentStatus === "success") {
        toast.success("Payment successful!");
        navigate("/success");  // Redirect to success page after payment
      } else {
        toast.error("Payment failed. Please try again.");
        // Do not navigate yet; stay on the current page to retry payment
      }

      if (response.data.checkoutUrl) {
        // Directly navigate to the payment gateway URL
        window.location.href = response.data.checkoutUrl;
      }
    } catch (error) {
      console.error("Payment Error:", error);
      toast.error("Payment Failed. Please try again.");
    }
  };

  return (
    <div className="customise-container">
      <div className="product-list">
        <h2 className="text-center">
          Select 10 Individual Putharekulu – Pick any 10 from below
        </h2>
        <div className="products">
          {putharekuluProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>₹{product.price / 10}</p>
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
            if (!product) return null;
            return (
              <li key={product.id}>
                {product.name} (x{selectedProducts[product.id]}) - ₹
                {(product.price / 10) * selectedProducts[productId]}
              </li>
            );
          })}
        </ul>
        <h3>Total: ₹{totalAmount}</h3>
        <button
          className="buy-now"
          onClick={handlePayment}
          disabled={getTotalSelected() !== 10}
        >
          {getTotalSelected() === 10
            ? "Proceed to Checkout"
            : "Select 10 to Buy"}
        </button>
        <button className="clear-btn" onClick={clearAll}>
          Clear All
        </button>
      </div>
    </div>
  );
};

export default Customise;
