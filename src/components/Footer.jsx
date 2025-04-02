import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer-section text-white py-5">
      <div className="container">
        <div className="row">
          {/* Company Info */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold text-uppercase">E-Shop</h5>
            <p className="text-light">Your one-stop shop for all things fashion and lifestyle.</p>
          </div>

          {/* Customer Service */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold text-uppercase">Customer Service</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="footer-link">Contact Us</a></li>
              <li><a href="#" className="footer-link">Returns & Refunds</a></li>
              <li><a href="#" className="footer-link">Shipping Policy</a></li>
              <li><a href="#" className="footer-link">FAQs</a></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold text-uppercase">Follow Us</h5>
            <div className="d-flex gap-3">
              <a href="#" className="social-icon"><FaFacebookF /></a>
              <a href="#" className="social-icon"><FaTwitter /></a>
              <a href="#" className="social-icon"><FaInstagram /></a>
              <a href="#" className="social-icon"><FaLinkedinIn /></a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold text-uppercase">Newsletter</h5>
            <p className="text-light">Subscribe to get updates on new products and offers.</p>
            <div className="input-group">
              <input type="email" className="form-control newsletter-btn" placeholder="Enter your email" />
              <button className="btn btn-primary newsletter-btn">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-light border-top pt-3 mt-4 footer-bottom">
        &copy; {new Date().getFullYear()} E-Shop. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;