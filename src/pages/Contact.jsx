import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css"; // Import custom styles

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <h2 className="text-center mb-4 elegant-text">Get in Touch</h2>
        <p className="text-center text-muted mb-5">
          We’d love to hear from you! Fill out the form below or reach out directly.
        </p>

        <div className="row">
          {/* Contact Form */}
          <div className="col-lg-7">
            <div className="card contact-card light-bg1">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Full Name
                  </label>
                  <input type="text" className="form-control elegant-input" id="name" placeholder="Enter your name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input type="email" className="form-control elegant-input" id="email" placeholder="Enter your email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea className="form-control elegant-input" id="message" rows="4" placeholder="Your message"></textarea>
                </div>
                <button type="submit" className="btn btn-elegant w-100">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-lg-5">
            <div className="contact-info">
              <div className="card contact-card light-bg2">
                <h5>Contact Information</h5>
                <p><strong>📍 Address:</strong> 123 Elegant St, New York, NY</p>
                <p><strong>📧 Email:</strong> support@example.com</p>
                <p><strong>📞 Phone:</strong> +1 234 567 890</p>
                <p><strong>🕒 Working Hours:</strong> Mon - Fri, 9 AM - 6 PM</p>
              </div>
              <div className="social-icons mt-4 text-center">
                <a href="#" className="btn social-btn linkedin"><i className="fab fa-linkedin"></i></a>
                <a href="#" className="btn social-btn twitter"><i className="fab fa-twitter"></i></a>
                <a href="#" className="btn social-btn instagram"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
