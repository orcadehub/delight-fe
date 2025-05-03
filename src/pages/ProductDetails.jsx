import React, { useState, useEffect } from "react";
import "./ProductDetails.css";
import Img from "../assets/top1.webp";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const product = state?.product;

  const [mainImage, setMainImage] = useState(product?.image || Img);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const updateCartStorage = (updatedCart) => {
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const handleAddToCart = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.warning("Please login to add items to your cart!");
      navigate("/login");
      return;
    }

    const updatedCart = [...cart, product];
    updateCartStorage(updatedCart);
    toast.success("Product added to cart!");
  };

  const handleRemoveFromCart = () => {
    const productId = product._id || product.name;
    const updatedCart = cart.filter((item) => {
      const itemId = item._id || item.name;
      return itemId !== productId;
    });

    updateCartStorage(updatedCart);
    toast.info("Product removed from cart");
  };

  const isInCart = () => {
    const productId = product._id || product.name;
    return cart.some((item) => {
      const itemId = item._id || item.name;
      return itemId === productId;
    });
  };

  if (!product) {
    return <p className="text-danger text-center">No product selected.</p>;
  }

  const originalPrice = Math.round(product.price * 1.2);

  return (
    <div className="product-details">
      <div className="left-section">
        <img src={mainImage} alt="Main" className="main-image" />

        <div className="thumbnail-gallery">
          {[product.image, ...(product.moreImages || [])].map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`thumb-${idx}`}
              onClick={() => setMainImage(img)}
              className="thumbnail"
            />
          ))}
        </div>
      </div>

      <div className="right-section">
        <h2 className="product-title">{product.name}</h2>

        <div
          className="price-box"
          style={{ display: "flex", alignItems: "center" }}
        >
          <span
            className="original-price"
            style={{
              textDecoration: "line-through",
              color: "#999",
              marginRight: "8px",
              display: "inline-flex",
              alignItems: "center",
              fontFamily: "Arial, sans-serif", // Ensure consistent font
              fontSize: "16px", // Adjust as needed
              lineHeight: "1", // Prevent extra spacing
              verticalAlign: "middle", // Fine-tune alignment
            }}
          >
            ₹{originalPrice}
          </span>
          <span
            className="discounted-price"
            style={{
              fontWeight: "bold",
              color: "#e74c3c",
              display: "inline-flex",
              alignItems: "center",
              fontFamily: "Arial, sans-serif", // Match the font
              fontSize: "16px", // Match the size
              lineHeight: "1", // Match the line height
              verticalAlign: "middle", // Fine-tune alignment
            }}
          >
            ₹{product.price}
          </span>
        </div>

        {product.tag && <span className="badge">{product.tag}</span>}

        <div className="rating">⭐ {product.rating || 4.5} / 5</div>

        {product.ordersLastWeek && (
          <p className="orders-info">
            🔁 {product.ordersLastWeek}+ orders in the last week
          </p>
        )}

        <p className="product-description">
          {product.description ||
            "This is a delicious and authentic product made with love and tradition from Atreyapuram."}
        </p>

        {isInCart() ? (
          <button
            className="add-cart-btn remove"
            onClick={handleRemoveFromCart}
          >
            Remove from Cart
          </button>
        ) : (
          <button className="add-cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
