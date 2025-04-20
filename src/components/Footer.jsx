import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section text-white py-5">
      <div className="container">
        <div className="row">
          {/* Company Info */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold text-uppercase">90sDelight</h5>
            <p className="text-light">
              Bring back the timeless flavors of tradition, handcrafted with love using authentic methods.
            </p>
          </div>

          {/* Customer Service */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold text-uppercase">Customer Service</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/contact" className="footer-link">Contact Us</Link>
              </li>
              <li>
                <Link to="/returns-refunds" className="footer-link">Returns & Refunds</Link>
              </li>
              <li>
                <Link to="/shipping" className="footer-link">Shipping-Delivery</Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold text-uppercase">Follow Us</h5>
            <div className="d-flex gap-3">
              <a href="https://facebook.com" className="social-icon">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" className="social-icon">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" className="social-icon">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" className="social-icon">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold text-uppercase">Contact Info</h5>
            <ul className="list-unstyled">
              <li>
                <strong>Phone:</strong> +91 93919 29099
              </li>
              <li>
                <strong>Address:</strong> Athreyapuram
              </li>
              <li>
                <strong>Email:</strong> <a href="mailto:contact@90sdelight.in" className="footer-link">contact@90sdelight.in</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center text-light border-top pt-3 mt-4 footer-bottom">
        &copy; {new Date().getFullYear()} 90sDelight. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
