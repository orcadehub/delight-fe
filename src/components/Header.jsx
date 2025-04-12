import React, { useEffect, useState } from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Marque from "./Marque";
import Logo from "../assets/logo.avif";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }

    updateCartCount(); // Initial cart count
  }, []);
  const closeNavbar = () => {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector("#responsive-navbar-nav");

    if (navbarToggler && navbarCollapse.classList.contains("show")) {
      navbarToggler.click(); // Close the menu
    }
  };

  useEffect(() => {
    const handleStorageChange = () => {
      updateCartCount();
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const updateCartCount = () => {
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    const count = cartData.length;
    setCartCount(count);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  const handleCartClick = () => {
    navigate("/cart");

    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector("#responsive-navbar-nav");

    if (navbarToggler && navbarCollapse.classList.contains("show")) {
      navbarToggler.click();
    }
  };

  return (
    <div className="sticky-top header">
      <Marque />
      <Navbar collapseOnSelect expand="lg" className="bg">
        <Container className="d-flex justify-content-between align-items-center">
          {/* Brand */}
          <Navbar.Brand href="/" className="brand-container">
            <img src={Logo} alt="Logo" />
            <span className="mobile-brand-text">90sDelight</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/aboutus">About Us</Nav.Link>
              <Nav.Link href="/products/putharekulu">Products</Nav.Link>
              <Nav.Link href="/corporate">Corporate Gifting</Nav.Link>
              <Nav.Link href="/partner">Partner With Us</Nav.Link>
              <Nav.Link href="/contact">Contact Us</Nav.Link>
            </Nav>

            <Nav className="align-items-center gap-3">
              {user ? (
                <>
                  {/* Dropdown menu for logged-in user */}
                  <NavDropdown
                    title={
                      <span className="user-dropdown-title">
                        <i className="fa-solid fa-user-circle"></i>
                        <span className="ms-1 me-1">
                          {user.fullName?.split(" ")[0] || "My Account"}
                        </span>
                        <i className="fa-solid fa-caret-down"></i>
                      </span>
                    }
                    id="user-nav-dropdown"
                  >
                    <NavDropdown.Item
                      onClick={() => {
                        navigate("/profile");
                        closeNavbar();
                      }}
                    >
                      Profile
                    </NavDropdown.Item>

                    <NavDropdown.Item
                      onClick={() => {
                        navigate("/orders");
                        closeNavbar();
                      }}
                    >
                      Orders
                    </NavDropdown.Item>

                    <NavDropdown.Item
                      onClick={() => {
                        handleLogout();
                        closeNavbar();
                      }}
                    >
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>

                  {/* Cart button visible only when logged in */}
                  <button
                    type="button"
                    className="btn position-relative"
                    onClick={handleCartClick}
                  >
                    <i className="fa-solid fa-cart-shopping fa-xl"></i>
                    {cartCount > 0 && (
                      <span className="cart-count-badge">{cartCount}</span>
                    )}
                  </button>
                </>
              ) : (
                <Nav.Link href="/login">Account</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
