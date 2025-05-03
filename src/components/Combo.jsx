import React, { useEffect, useRef, useMemo, useState } from "react";
import combos from "./combos";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import "./TopSellers.css";

const Combo = () => {
  const trackRef = useRef(null);
  const scrollAmountRef = useRef(0); // Keep track of scroll position
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("cart")) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const displayedCombos = useMemo(() => {
    const shuffled = [...combos].sort(() => 0.5 - Math.random());
    return [...shuffled, ...shuffled]; // Doubled for seamless loop
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animationFrame;

    const scroll = () => {
      if (!isHovered) {
        scrollAmountRef.current += 1;
        const maxScroll = track.scrollWidth / 2;
        if (scrollAmountRef.current >= maxScroll) {
          scrollAmountRef.current = 0;
        }
        track.style.transform = `translateX(-${scrollAmountRef.current}px)`;
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrame);
  }, [isHovered]);

  const handleAddToCart = (product) => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.warning("Please login to add items to your cart!");
      navigate("/login");
      return;
    }
    setCart((prevCart) => [...prevCart, product]);
    toast.success(`${product.name} added to cart!`);
  };

  const handleRemoveFromCart = (product) => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.warning("Please login to remove items from your cart!");
      navigate("/login");
      return;
    }

    const productId = product._id || product.name;
    const updatedCart = cart.filter((item) => {
      const itemId = item._id || item.name;
      return itemId !== productId;
    });
    setCart(updatedCart);
    toast.info(`${product.name} removed from cart`);
  };

  const isInCart = (product) => {
    const productId = product._id || product.name;
    return cart.some((item) => {
      const itemId = item._id || item.name;
      return itemId === productId;
    });
  };

  return (
    <div className="ts-container">
      <div
        className="d-flex justify-content-between"
        style={{ marginBottom: "10px", alignItems: "center" }}
      >
        <h1 style={{ margin: 0, fontSize: "24px", fontWeight: "bold" }}>
          Combo Packs
        </h1>
        <Link
          to="/top-sellers"
          style={{
            textDecoration: "none",
            color: "#007bff",
            fontWeight: "500",
            fontSize: "16px",
          }}
        >
          View More →
        </Link>
      </div>

      <div className="ts-scroll-wrapper" style={{ overflowX: "auto" }}>
        <div
          className="ts-products-track"
          ref={trackRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            display: "flex",
            gap: "15px",
            transition: "transform 0.3s ease",
          }}
        >
          {displayedCombos.map((product, index) => (
            <div
              key={`${product.name}-${index}`}
              className="ts-card"
              style={{
                minWidth: "200px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "12px",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.2s ease-in-out",
                cursor: "pointer",
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{ width: "100%", height: "auto", borderRadius: "8px" }}
              />
              <h3
                style={{
                  marginTop: "8px",
                  fontSize: "18px",
                  fontWeight: "600",
                }}
              >
                {product.name}
              </h3>
              <p
                style={{
                  color: "#c0392b",
                  fontSize: "16px",
                  fontWeight: "500",
                }}
              >
                ₹{product.price.toFixed(2)}
              </p>
              {isInCart(product) ? (
                <button
                  className="ts-btn"
                  style={{
                    backgroundColor: "#c0392b",
                    color: "white",
                    borderRadius: "4px",
                    padding: "8px",
                    width: "100%",
                    cursor: "pointer",
                    border: "none",
                    fontSize: "14px",
                  }}
                  onClick={() => handleRemoveFromCart(product)}
                >
                  Remove from Cart
                </button>
              ) : (
                <button
                  className="ts-btn"
                  style={{
                    backgroundColor: "#28a745",
                    color: "white",
                    borderRadius: "4px",
                    padding: "8px",
                    width: "100%",
                    cursor: "pointer",
                    border: "none",
                    fontSize: "14px",
                  }}
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Combo;
