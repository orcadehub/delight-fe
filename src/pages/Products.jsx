import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Products.css";
import Img from "../assets/top1.webp";
import { toast } from "react-toastify";
import allProducts from "./fake"; // Import your mock product array

const Products = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const categories = [
    "putharekulu",
    "snacks",
    "sankranthi-delights",
    "jellies",
  ];

  const [selectedCategory, setSelectedCategory] = useState(type || "putharekulu");
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setSelectedCategory(type || "putharekulu");
  }, [type]);

  useEffect(() => {
    const filtered = allProducts.filter(
      (product) => product.category === selectedCategory
    );
    setProducts(filtered);
  }, [selectedCategory]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const updateCartStorage = (updatedCart) => {
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    navigate(`/products/${category}`);
  };

  const handleAddToCart = (product) => {
    const token = localStorage.getItem("token"); // or sessionStorage.getItem("token")
  
    if (!token) {
      toast.warning("Please login to add items to your cart!");
      navigate("/login");
      return;
    }
  
    const updatedCart = [...cart, product];
    updateCartStorage(updatedCart);
    toast.success("Product added to cart!");
  };
  
  const handleRemoveFromCart = (productId) => {
    const token = localStorage.getItem("token"); // or sessionStorage.getItem("token")
  
    if (!token) {
      toast.warning("Please login to remove items from your cart!");
      navigate("/login");
      return;
    }
  
    const updatedCart = cart.filter((item) => {
      const itemId = item._id || item.name;
      return itemId !== productId;
    });
  
    updateCartStorage(updatedCart);
    toast.info("Product removed from cart");
  };

  const isInCart = (product) => {
    const productId = product._id || product.name;
    return cart.some((item) => {
      const itemId = item._id || item.name;
      return itemId === productId;
    });
  };

  return (
    <div className="products-container">
      <h2 className="products-heading">
        {selectedCategory.replace("-", " ")} Products
      </h2>

      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`category-button ${
              selectedCategory === category ? "active" : ""
            }`}
          >
            {category.replace("-", " ")}
          </button>
        ))}
      </div>

      <div className="products-grid">
        {products.length === 0 ? (
          <p className="text-primary">No products found in this category.</p>
        ) : (
          products.map((product, index) => {
            const originalPrice = Math.round(product.price * 1.2);
            const productId = product._id || product.name;

            return (
              <div className="product-card" key={index}>
                <img
                  src={product.image || Img}
                  alt={product.name}
                  className="product-image"
                />

                {product.tag && (
                  <span className="product-badge">{product.tag}</span>
                )}

                <h4 className="product-name">{product.name}</h4>

                <div className="price-box">
                  <span
                    className="original-price"
                    style={{
                      textDecoration: "line-through",
                      color: "#999",
                      marginRight: "8px",
                    }}
                  >
                    ₹{originalPrice}
                  </span>
                  <span
                    className="discounted-price"
                    style={{ fontWeight: "bold", color: "#e74c3c" }}
                  >
                    ₹{product.price}
                  </span>
                </div>

                {product.ordersLastWeek && (
                  <p className="orders-info">
                    🔄 {product.ordersLastWeek}+ orders placed last week
                  </p>
                )}

                {isInCart(product) ? (
                  <button
                    className="buy-now-btn"
                    style={{ backgroundColor: "#c0392b" }}
                    onClick={() => handleRemoveFromCart(productId)}
                  >
                    <i className="fa-solid fa-trash fa-l me-2"></i>Remove from Cart
                  </button>
                ) : (
                  <button
                    className="buy-now-btn"
                    onClick={() => handleAddToCart(product)}
                  >
                    <i className="fa-solid fa-cart-shopping fa-l me-2"></i>Add to Cart
                  </button>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Products;
