import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Products.css";
import Image from "../assets/top1.webp";
const Products = () => {
  const { type } = useParams(); // get the category type from the URL
  const categories = [
    "putharekulu",
    "snacks",
    "sankranthi-delights",
    "jellies",
  ];
  const [selectedCategory, setSelectedCategory] = useState(
    type || "putharekulu"
  );

  useEffect(() => {
    setSelectedCategory(type || "putharekulu");
  }, [type]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    window.history.pushState({}, "", `/products/${category}`);
  };

  const products = {
    putharekulu: [
      {
        id: 1,
        name: "Dry Fruit Putharekulu",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Putharekulu.jpg/640px-Putharekulu.jpg",
        originalPrice: 180,
        discountedPrice: 150,
        ordersLastWeek: 42,
        tag: "Best Seller",
      },
      {
        id: 2,
        name: "Jaggery Putharekulu",
        image:
          "https://www.atozpulse.com/wp-content/uploads/2021/08/Putharekulu-1024x768.jpg",
        originalPrice: 160,
        discountedPrice: 130,
        ordersLastWeek: 28,
        tag: "Limited Stock",
      },
      {
        id: 10,
        name: "Dry Fruit Putharekulu",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Putharekulu.jpg/640px-Putharekulu.jpg",
        originalPrice: 180,
        discountedPrice: 150,
        ordersLastWeek: 42,
        tag: "Best Seller",
      },
      {
        id: 9,
        name: "Jaggery Putharekulu",
        image:
          "https://www.atozpulse.com/wp-content/uploads/2021/08/Putharekulu-1024x768.jpg",
        originalPrice: 160,
        discountedPrice: 130,
        ordersLastWeek: 28,
        tag: "Limited Stock",
      },
      {
        id: 13,
        name: "Dry Fruit Putharekulu",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Putharekulu.jpg/640px-Putharekulu.jpg",
        originalPrice: 180,
        discountedPrice: 150,
        ordersLastWeek: 42,
        tag: "Best Seller",
      },
      {
        id: 12,
        name: "Jaggery Putharekulu",
        image:
          "https://www.atozpulse.com/wp-content/uploads/2021/08/Putharekulu-1024x768.jpg",
        originalPrice: 160,
        discountedPrice: 130,
        ordersLastWeek: 28,
        tag: "Limited Stock",
      },
      {
        id: 11,
        name: "Dry Fruit Putharekulu",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Putharekulu.jpg/640px-Putharekulu.jpg",
        originalPrice: 180,
        discountedPrice: 150,
        ordersLastWeek: 42,
        tag: "Best Seller",
      },
      {
        id: 19,
        name: "Jaggery Putharekulu",
        image:
          "https://www.atozpulse.com/wp-content/uploads/2021/08/Putharekulu-1024x768.jpg",
        originalPrice: 160,
        discountedPrice: 130,
        ordersLastWeek: 28,
        tag: "Limited Stock",
      },
    ],
    snacks: [
      {
        id: 3,
        name: "Murukulu",
        image:
          "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/07/murukku-recipe.jpg",
        originalPrice: 100,
        discountedPrice: 80,
        ordersLastWeek: 35,
        tag: "Crispy Pick",
      },
      {
        id: 4,
        name: "Chekkalu",
        image:
          "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/08/chekkalu-recipe.jpg",
        originalPrice: 90,
        discountedPrice: 70,
        ordersLastWeek: 40,
      },
      {
        id: 31,
        name: "Murukulu",
        image:
          "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/07/murukku-recipe.jpg",
        originalPrice: 100,
        discountedPrice: 80,
        ordersLastWeek: 35,
        tag: "Crispy Pick",
      },
      {
        id: 41,
        name: "Chekkalu",
        image:
          "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/08/chekkalu-recipe.jpg",
        originalPrice: 90,
        discountedPrice: 70,
        ordersLastWeek: 40,
      },
      {
        id: 32,
        name: "Murukulu",
        image:
          "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/07/murukku-recipe.jpg",
        originalPrice: 100,
        discountedPrice: 80,
        ordersLastWeek: 35,
        tag: "Crispy Pick",
      },
      {
        id: 42,
        name: "Chekkalu",
        image:
          "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/08/chekkalu-recipe.jpg",
        originalPrice: 90,
        discountedPrice: 70,
        ordersLastWeek: 40,
      },
    ],
    "sankranthi-delights": [
      {
        id: 5,
        name: "Ariselu",
        image:
          "https://www.subbuskitchen.com/wp-content/uploads/2021/01/Ariselu-2-500x500.jpg",
        originalPrice: 140,
        discountedPrice: 120,
        ordersLastWeek: 50,
      },
      {
        id: 6,
        name: "Bobbatlu",
        image:
          "https://www.subbuskitchen.com/wp-content/uploads/2021/03/Bobbatlu-Puran-Poli.jpg",
        originalPrice: 130,
        discountedPrice: 100,
        ordersLastWeek: 37,
        tag: "Festive Favorite",
      },
    ],
    jellies: [
      {
        id: 7,
        name: "Fruit Jelly Mix",
        image: "https://m.media-amazon.com/images/I/81Fw-LyU+zL._SL1500_.jpg",
        originalPrice: 80,
        discountedPrice: 60,
        ordersLastWeek: 55,
      },
      {
        id: 8,
        name: "Mango Jelly",
        image: "https://m.media-amazon.com/images/I/81RvU0U0BFL._SL1500_.jpg",
        originalPrice: 70,
        discountedPrice: 50,
        ordersLastWeek: 65,
        tag: "Top Rated",
      },
      {
        id: 71,
        name: "Fruit Jelly Mix",
        image: "https://m.media-amazon.com/images/I/81Fw-LyU+zL._SL1500_.jpg",
        originalPrice: 80,
        discountedPrice: 60,
        ordersLastWeek: 55,
      },
      {
        id: 81,
        name: "Mango Jelly",
        image: "https://m.media-amazon.com/images/I/81RvU0U0BFL._SL1500_.jpg",
        originalPrice: 70,
        discountedPrice: 50,
        ordersLastWeek: 65,
        tag: "Top Rated",
      },
    ],
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
        {(products[selectedCategory] || []).map((product) => (
          <div className="product-card" key={product.id}>
            <img src={Image} alt={product.name} className="product-image" />

            {product.tag && (
              <span className="product-badge">{product.tag}</span>
            )}

            <h4 className="product-name">{product.name}</h4>

            <div className="price-box">
              <span className="original-price">₹{product.originalPrice}</span>
              <span className="discounted-price">
                ₹{product.discountedPrice}
              </span>
            </div>

            <p className="orders-info">
              🔄 {product.ordersLastWeek}+ orders placed last week
            </p>

            <button className="buy-now-btn">
              {" "}
              <i className="fa-solid fa-cart-shopping fa-l me-2"></i>Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
