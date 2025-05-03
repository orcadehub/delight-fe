import React, { useEffect, useRef, useMemo, useState } from "react";
import combos from "./combos";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./TopSellers.css";

const Combo = () => {
  const trackRef = useRef(null);
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
    return [...shuffled, ...shuffled]; // Doubled for smooth auto-scroll
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let scrollAmount = 0;
    let animationFrame;

    const scroll = () => {
      if (!isHovered) {
        scrollAmount += 1;
        if (scrollAmount >= track.scrollWidth / 2) {
          scrollAmount = 0;
        }
        track.style.transform = `translateX(-${scrollAmount}px)`;
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    scroll();
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
      <h1>Combo Packs</h1>
      <div className="ts-scroll-wrapper">
        <div
          className="ts-products-track"
          ref={trackRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {displayedCombos.map((product, index) => (
            <div key={`${product.name}-${index}`} className="ts-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>₹{product.price.toFixed(2)}</p>
              {isInCart(product) ? (
                <button
                  className="ts-btn"
                  style={{ backgroundColor: "#c0392b" }}
                  onClick={() => handleRemoveFromCart(product)}
                >
                  Remove from Cart
                </button>
              ) : (
                <button
                  className="ts-btn"
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
