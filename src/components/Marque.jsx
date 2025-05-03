import React from 'react';
import './Marque.css';

const Marque = () => {
  const whatsappUrl = "https://wa.me/919391929099?text=Hello%20I%27m%20interested%20in%20international%20orders";

  const messages = [
    "⭐ For International Orders Click Me ⭐",
    "⭐ Deliver in 2 days ⭐",
    "⭐ For International Orders Click Me ⭐",
    "⭐ Deliver in 2 days ⭐",
    "⭐ For International Orders Click Me ⭐",
    "⭐ Deliver in 2 days ⭐",
    "⭐ For International Orders Click Me ⭐",
    "⭐ Deliver in 2 days ⭐",
    "⭐ For International Orders Click Me ⭐",
    "⭐ Deliver in 2 days ⭐",
    "⭐ For International Orders Click Me ⭐"
  ];

  return (
    <div className="marquee-container">
      <div className="marquee">
        {messages.map((msg, index) => (
          <button
            key={index}
            className="marquee-btn mx-5"
            onClick={() => {
              if (msg.includes("International Orders")) {
                window.open(whatsappUrl, '_blank');
              }
            }}
          >
            {msg}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Marque;
