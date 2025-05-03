import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="container text-center">
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-subtitle">
          Have questions or want to place an order? Reach out to us for the best traditional sweets from Atreyapuram.
        </p>

        {/* Form & Newsletter */}
        <div className="form-section">
          <div className="form-left">
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Phone" />
            <input type="text" placeholder="Name" />
            <textarea placeholder="Message" rows="4"></textarea>
            <button className="submit-btn">Submit</button>
          </div>
          <div className="form-right">
            <h5>Subscribe to Our Newsletter</h5>
            <p>
              Stay updated on new varieties, discounts, and special festive collections from 90’s Delight.
            </p>
            <input type="email" placeholder="Enter your email" />
            <button className="submit-btn dark">Subscribe</button>
          </div>
        </div>

        {/* Contact Info */}
        <div className="info-cards">
          <div className="info-card">
            <h6>+91 93919 29099</h6>
            <p>Call us to know more about our traditional sweet offerings and customized gift packages.</p>
          </div>
          <div className="info-card">
            <h6>contact@90sdelight.in</h6>
            <p>Email us for bulk orders, collaborations, or franchise opportunities.</p>
          </div>
          <div className="info-card">
            <h6>Atreyapuram, Andhra Pradesh</h6>
            <p>Home of authentic Putharekulu — handcrafted and delivered fresh to your doorstep.</p>
          </div>
        </div>

        {/* Map */}
        <div className="map-container">
          <iframe
            title="Atreyapuram Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.123951957001!2d81.79558951488967!3d16.82124622261681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37aabbbdb5bd5f%3A0xb6480a1f15c3fc58!2sAtreyapuram%2C%20Andhra%20Pradesh%20533848!5e0!3m2!1sen!2sin!4v1714729920012!5m2!1sen!2sin"
            width="100%"
            height="300"
            allowFullScreen=""
            loading="lazy"
            style={{ border: 0 }}
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
