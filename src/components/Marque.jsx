import React from 'react';
import './Marque.css';

const Marque = () => {
  // WhatsApp URL with the phone number and pre-filled message
  const whatsappUrl = "https://wa.me/919391929099?text=Hello%20I%27m%20interested%20in%20international%20orders";

  return (
    <div className="marquee-container">
      <div className="marquee">
        <button 
          className="marquee-btn mx-5"
          onClick={() => window.open(whatsappUrl, '_blank')}
        >
          ⭐ For International Orders Click Me ⭐
        </button>
        <button 
          className="marquee-btn mx-5"
          onClick={() => window.open(whatsappUrl, '_blank')}
        >
          ⭐ For International Orders Click Me ⭐
        </button>
        <button 
          className="marquee-btn mx-5"
          onClick={() => window.open(whatsappUrl, '_blank')}
        >
          ⭐ For International Orders Click Me ⭐
        </button>
        <button 
          className="marquee-btn mx-5"
          onClick={() => window.open(whatsappUrl, '_blank')}
        >
          ⭐ For International Orders Click Me ⭐
        </button>
        <button 
          className="marquee-btn mx-5"
          onClick={() => window.open(whatsappUrl, '_blank')}
        >
          ⭐ For International Orders Click Me ⭐
        </button>
        <button 
          className="marquee-btn mx-5"
          onClick={() => window.open(whatsappUrl, '_blank')}
        >
          ⭐ For International Orders Click Me ⭐
        </button>
        <button 
          className="marquee-btn mx-5"
          onClick={() => window.open(whatsappUrl, '_blank')}
        >
          ⭐ For International Orders Click Me ⭐
        </button>
        <button 
          className="marquee-btn mx-5"
          onClick={() => window.open(whatsappUrl, '_blank')}
        >
          ⭐ For International Orders Click Me ⭐
        </button>
        <button 
          className="marquee-btn mx-5"
          onClick={() => window.open(whatsappUrl, '_blank')}
        >
          ⭐ For International Orders Click Me ⭐
        </button>
        <button 
          className="marquee-btn mx-5"
          onClick={() => window.open(whatsappUrl, '_blank')}
        >
          ⭐ For International Orders Click Me ⭐
        </button>
        <button 
          className="marquee-btn mx-5"
          onClick={() => window.open(whatsappUrl, '_blank')}
        >
          ⭐ For International Orders Click Me ⭐
        </button>
      </div>
    </div>
  );
};

export default Marque;