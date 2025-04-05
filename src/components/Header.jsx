import React from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Marque from "./Marque";
import Logo from "../assets/logo.avif";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleCartClick = () => {
    navigate("/cart"); // Navigate to cart page
  };

  return (
    <div className="sticky-top header">
      <Marque />
      <Navbar collapseOnSelect expand="lg" className="bg">
        <Container className="d-flex justify-content-between align-items-center">
          {/* Brand & Logo */}
          <Navbar.Brand href="/" className="brand-container">
            <img src={Logo} alt="Logo" height="70" />
            <span className="mobile-brand-text">90sDelight</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#tracking">Tracking</Nav.Link>
              <Nav.Link href="#aboutus">About Us</Nav.Link>
              <Nav.Link href="#putharekulu">Putharekulu</Nav.Link>
              <Nav.Link href="#sankranthi">Sankranthi Delights</Nav.Link>
              <Nav.Link href="#corporate">Corporate Gifting</Nav.Link>
              <Nav.Link href="/partner">Partner With Us</Nav.Link>
              <Nav.Link href="/contact">Contact Us</Nav.Link>
            </Nav>
            <Nav className="align-items-center">
              <Nav.Link href="#account">Account</Nav.Link>
              <button
                type="button"
                className="btn position-relative"
                onClick={handleCartClick}
              >
                <i className="fa-solid fa-cart-shopping fa-xl"></i>
                <span className="position-absolute top-10 start-90 translate-middle p-2 bg-warning border border-light rounded-circle">
                  <span className="visually-hidden">New alerts</span>
                </span>
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
