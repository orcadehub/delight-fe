import React from "react";
import CarouselEx from "../components/CarouselEx";
import "./Home.css";
import Cat from "../components/Cat";
import TopSellers from "../components/TopSellers";

const Home = () => {
  return (
    <div className="home-container">
      <CarouselEx />
      {/* customise */}
      <div className="content-wrapper">
        <h1>Customise Your Box</h1>
        <p className="selection-text">
          Select any 10 types of putharekulu and add it in the box
        </p>
        <button className="customise-btn">Click here to customise</button>
      </div>

      {/* Categories */}
      <Cat />

      {/* Top sellers */}
      <TopSellers/>
    </div>
  );
};

export default Home;
