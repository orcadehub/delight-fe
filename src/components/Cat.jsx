import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing
import './Cat.css'
import Cat1 from '../assets/cat1.webp'
import Cat2 from '../assets/cat2.webp'
import Cat3 from '../assets/cat3.png'
import Cat4 from '../assets/cat4.webp'

const Cat = () => {
  const navigate = useNavigate(); // Hook for navigation

  // Array of 4 categories
  const categories = [
    { id: 1, name: "Electronics", image: Cat1 },
    { id: 2, name: "Fashion", image: Cat2 },
    { id: 3, name: "Home Decor", image: Cat3 },
    { id: 4, name: "Books", image: Cat4 },
  ];

  // Function to handle card click
  const handleCategoryClick = (categoryName) => {
    navigate(`/products/${categoryName.toLowerCase().replace(" ", "-")}`);
  };

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
            <img src={category.image} alt={category.name} />
            <h3>{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cat;