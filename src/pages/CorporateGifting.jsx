import React, { useState } from 'react';
import './Corporate.css';

const CorporateGifting = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    requirements: '',
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // TODO: Send this data to backend/server
    alert('Your request has been submitted successfully!');
    setFormData({
      name: '',
      company: '',
      phone: '',
      email: '',
      requirements: '',
    });
  };

  return (
    <div className="cg-container">
      <h1>Corporate Gifting</h1>
      <p className="cg-description">
        We specialize in personalized and memorable corporate gifting solutions 
        for your employees, clients, and partners. Whether it's festive season, 
        milestone celebrations, or client appreciation, we offer traditional 
        sweets like Putharekulu with custom branding and bulk delivery.
      </p>

      <form onSubmit={handleSubmit} className="cg-form">
        <div className="cg-form-group">
          <label>Name</label>
          <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            required 
          />
        </div>

        <div className="cg-form-group">
          <label>Company Name</label>
          <input 
            type="text" 
            name="company"
            value={formData.company}
            onChange={handleChange}
            required 
          />
        </div>

        <div className="cg-form-group">
          <label>Phone Number</label>
          <input 
            type="tel" 
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required 
          />
        </div>

        <div className="cg-form-group">
          <label>Email Address</label>
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            required 
          />
        </div>

        <div className="cg-form-group">
          <label>Requirements</label>
          <textarea 
            name="requirements"
            rows="4"
            value={formData.requirements}
            onChange={handleChange}
            required
            placeholder="Quantity, packaging preferences, delivery location, etc."
          />
        </div>

        <button type="submit" className="cg-submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default CorporateGifting;
