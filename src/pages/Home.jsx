import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import CarouselEx from "../components/CarouselEx";
import "./Home.css";
import Cat from "../components/Cat";
import TopSellers from "../components/TopSellers";
import Customise from '../assets/customise.png'; // Import the image

const Home = () => {
  const navigate = useNavigate(); // Initialize navigate function

  return (
    <div className="home-container">
      <CarouselEx />
      
      {/* Customise Section */}
      <div className="customise-image-wrapper">
        <img 
          src={Customise} 
          alt="Customise Your Box" 
          className="customise-image" 
          onClick={() => navigate("/customise")} // Navigate on click
        />
      </div>

      {/* Categories */}
      <Cat />

      {/* Top sellers */}
      <TopSellers/>
    </div>
  );
};

export default Home;
