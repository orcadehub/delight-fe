import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import CarouselEx from "../components/CarouselEx";
import "./Home.css";
import Cat from "../components/Cat";
import TopSellers from "../components/TopSellers";

const Home = () => {
  const navigate = useNavigate(); // Initialize navigate function

  return (
    <div className="home-container">
      <CarouselEx />
      
      {/* Customise Section */}
      <div className="content-wrapper">
        <h1>Customise Your Box</h1>
        <p className="selection-text">
          Select any 10 types of putharekulu and add it in the box
        </p>
        <button 
          className="customise-btn" 
          onClick={() => navigate("/customise")} // Navigate on click
        >
          Click here to customise
        </button>
      </div>

      {/* Categories */}
      <Cat />

      {/* Top sellers */}
      <TopSellers/>
    </div>
  );
};

export default Home;
