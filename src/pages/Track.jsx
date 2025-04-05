import React, { useState } from 'react';
import './Track.css';

const steps = [
  "Ordered",
  "Packed",
  "In Transit",
  "Out for Delivery",
  "Delivered",
  "Not Delivered"
];

// Sample orders list
const orders = [
  { id: "ORD123", product: "T-Shirt", status: "Delivered" },
  { id: "ORD124", product: "Sneakers", status: "In Transit" },
  { id: "ORD125", product: "Cap", status: "Packed" },
  { id: "ORD126", product: "Bottle", status: "Not Delivered" },
];

const Track = () => {
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  const getStepClass = (step, status) => {
    if (step === status) return "v-step active";
    const currentIndex = steps.indexOf(status);
    const stepIndex = steps.indexOf(step);

    if (status === "Not Delivered" && stepIndex < currentIndex) {
      return "v-step completed";
    }

    if (stepIndex < currentIndex && status !== "Not Delivered") {
      return "v-step completed";
    }

    return "v-step";
  };

  return (
    <div className="v-track-container">
      <h3 className="text-white mb-4">My Orders</h3>
      <div className="order-list-column">
        {orders.map((order) => (
          <div
            key={order.id}
            className={`order-item-column ${selectedOrderId === order.id ? "active" : ""}`}
            onClick={() => setSelectedOrderId(order.id)}
          >
            <p className="text-white m-0 fw-bold">{order.id} - {order.product}</p>

            {selectedOrderId === order.id && (
              <div className="v-track-steps mt-3">
                {steps.slice(0, 5).map((step, index) => (
                  <div key={index} className={getStepClass(step, order.status)}>
                    <div className="v-circle">{index + 1}</div>
                    <p className="v-label">{step}</p>
                  </div>
                ))}
                {order.status === "Delivered" && (
                  <div className="text-success text-center mt-3 fw-bold">Your order has been delivered ✅</div>
                )}
                {order.status === "Not Delivered" && (
                  <div className="text-danger text-center mt-3 fw-bold">Your order could not be delivered ❌</div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Track;
