import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="container text-center">
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>

        {/* Logo Row */}
        {/* <div className="logo-row">
          <img src="https://via.placeholder.com/100x40?text=Logo1" alt="Logo1" />
          <img src="https://via.placeholder.com/100x40?text=Logo2" alt="Logo2" />
          <img src="https://via.placeholder.com/100x40?text=Logo3" alt="Logo3" />
          <img src="https://via.placeholder.com/100x40?text=Logo4" alt="Logo4" />
        </div> */}

        {/* Form & Newsletter */}
        <div className="form-section">
          <div className="form-left">
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Phone" />
            <input type="text" placeholder="Name" />
            <textarea placeholder="Message" rows="4"></textarea>
            <button className="submit-btn">Submit Button</button>
          </div>
          <div className="form-right">
            <h5>Our Newsletters</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <input type="email" placeholder="Email" />
            <button className="submit-btn dark">Submit Button</button>
          </div>
        </div>

        {/* Contact Info */}
        <div className="info-cards">
          <div className="info-card">
            <h6>(+876) 765 665</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus luctus.</p>
          </div>
          <div className="info-card">
            <h6>mail@influenca.id</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus luctus.</p>
          </div>
          <div className="info-card">
            <h6>London Eye London</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus luctus.</p>
          </div>
        </div>

        {/* Map */}
        <div className="map-container">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19858.09331452803!2d-0.12464081028700574!3d51.503324543453526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b7252872c1%3A0xf13e12aaec0f9bd2!2sLondon%20Eye!5e0!3m2!1sen!2sin!4v1616161616161!5m2!1sen!2sin"
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
