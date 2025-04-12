import React from "react";
import { useNavigate } from "react-router-dom"; // Hook for navigation
import "./Cat.css";
import Cat1 from "../assets/c1.jpeg";
import Cat2 from "../assets/c2.jpeg";
import Cat3 from "../assets/c3.jpeg";
import Cat11 from "../assets/cat1.jpeg";
import Cat22 from "../assets/cat2.jpeg";
import Cat33 from "../assets/cat3.jpeg";

const Cat = () => {
  const navigate = useNavigate(); // Hook for navigation

  // Array of categories, with mobile and desktop images
  const categories = [
    {
      id: 1,
      name: "putharekulu",
      image: Cat1,
      mobileImage: Cat11,
    },
    {
      id: 2,
      name: "jellies",
      image: Cat2,
      mobileImage: Cat22,
    },
    {
      id: 3,
      name: "combo",
      image: Cat3,
      mobileImage: Cat33,
    },
  ];

  // Function to handle card click
  const handleCategoryClick = (categoryName) => {
    navigate(`/products/${categoryName.toLowerCase().replace(" ", "-")}`);
  };

  // Determine if the device is mobile
  const isMobile = window.innerWidth <= 576;

  return (
    <div className="categories-container">
      <h1>Shop by Categories</h1>
      <div className="categories-grid">
        {categories.map((category) => (
          <div
            key={category.id}
            className="category-card"
            onClick={() => handleCategoryClick(category.name)}
          >
            <img
              src={isMobile ? category.mobileImage : category.image} // Conditional rendering based on screen size
              alt={category.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cat;
