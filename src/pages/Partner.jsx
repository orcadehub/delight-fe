import React, { useState } from "react";
import "./Partner.css"; // Import custom CSS
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap

const Partner = () => {
  const [formData, setFormData] = useState({
    partnerType: "Retailer",
    shopName: "",
    area: "",
    requirements: "",
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you for your interest! Our team will contact you soon.");
  };

  return (
    <section className="partner-section">
      <div className="container">
        <div className="partner-container">
          {/* Header */}
          <h2 className="partner-title">Become Our Business Partner</h2>
          <p className="partner-subtitle">
            Partner with us as a retailer, distributor, or franchise and grow your business.
          </p>

          {/* Form */}
          <form className="mt-4" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Partner Type</label>
              <select
                name="partnerType"
                value={formData.partnerType}
                onChange={handleChange}
                className="form-select"
              >
                <option value="Retailer">Retailer</option>
                <option value="Distributor">Distributor</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Shop Name</label>
              <input
                type="text"
                name="shopName"
                placeholder="Enter your shop name"
                value={formData.shopName}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Shop Area / Location</label>
              <input
                type="text"
                name="area"
                placeholder="Enter your shop area"
                value={formData.area}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Business Requirements</label>
              <textarea
                name="requirements"
                placeholder="Describe your requirements"
                rows="3"
                value={formData.requirements}
                onChange={handleChange}
                className="form-control"
                required
              ></textarea>
            </div>

            <div className="mb-3">
              <label className="form-label">Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary w-100">
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Partner;
