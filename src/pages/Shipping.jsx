import React from 'react';
import './Shipping.css'; // Import the CSS file for styling

function Shipping() {
  return (
    <div className="shipping-container">
      <div className="shipping-header">
        <h1>Shipping & Delivery</h1>
      </div>

      <div className="shipping-content">
        <h3>Welcome to 90’s Delight! We’re thrilled you’ve chosen us to indulge in the nostalgic flavors of our handcrafted Putharekulu and other traditional treats. We’re dedicated to getting your order to you safely, securely, and fast.</h3>

        <h4>Our Guarantee of Freshness</h4>
        <p>
          We understand how much these sweets mean to you. That’s why we partner with reliable courier companies who share our commitment to speedy and secure delivery. They’ll ensure your delicious treats arrive in perfect condition, just as fresh as when they leave our kitchen.
        </p>

        <h4>How Long Will It Take?</h4>
        <h5>Domestic Deliveries (India)</h5>
        <ul>
          <li><strong>Standard:</strong> Expect your order delivered in 2-6 business days.</li>
          <li><strong>Fast & Eager?</strong> Orders placed before 12 PM IST typically ship the same day, reaching you even sooner!</li>
        </ul>

        <h5>International Deliveries</h5>
        <p>
          We love sharing our treats worldwide! For international orders, simply contact us on WhatsApp at <a href="https://wa.me/918897979489">here</a>, and we’ll be happy to provide personalized shipping options and estimated delivery times based on your location.
        </p>
        <ul>
          <li><strong>Estimated delivery time:</strong> 5-7 days, depending on your location.</li>
        </ul>

        <h4>Packed with Care, Delivered with Delight</h4>
        <p>
          Each order receives the utmost attention to detail during packaging. We use high-quality, sturdy packaging materials designed to protect your sweets throughout their journey.
        </p>

        <h4>Real-Time Tracking for Peace of Mind</h4>
        <p>
          Once your order ships, you’ll receive an email with a tracking link. Follow along and watch your sweet treats get closer to your doorstep!
        </p>

        <h4>Delivery Schedule</h4>
        <ul>
          <li>Our trusted partners deliver Monday through Saturday, between 9 AM and 7 PM.</li>
          <li>Please note that deliveries are made on weekdays only, excluding Sundays, public holidays, and festivals.</li>
        </ul>

        <h4>Helpful Tips for a Smooth Delivery</h4>
        <ul>
          <li><strong>Combine Orders:</strong> To save on shipping and ensure timely arrival, combine all your desired treats into a single order.</li>
          <li><strong>Double-Check Your Address:</strong> A clear and accurate address is crucial. Please verify everything before finalizing your order. Once confirmed, address changes are not possible.</li>
          <li><strong>Plan for Delivery:</strong> To avoid missed deliveries, ensure someone is present to receive your package. We make one delivery attempt. Unfortunately, we cannot reschedule or offer refunds for undelivered packages due to incorrect addresses, recipient unavailability, or refusal.</li>
        </ul>

        <h4>Unexpected Delays</h4>
        <p>
          Even with the best planning, unforeseen circumstances can arise. In rare cases of extreme weather or other disruptions, we may need to reschedule your delivery. However, we’ll keep you updated every step of the way and prioritize getting your sweets to you as quickly as possible.
        </p>

        <h4>We’re Here to Help!</h4>
        <p>
          If you have any questions about your order or delivery, please don’t hesitate to reach out! Our friendly and supportive team is always happy to assist you. Contact us at <a href="mailto:support@90sdelight.in">support@90sdelight.in</a>
        </p>

        <div className="shipping-footer">
          <p>
            Thank you for choosing 90’s Delight! We can’t wait to bring a taste of nostalgia and deliciousness straight to your door.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Shipping;
