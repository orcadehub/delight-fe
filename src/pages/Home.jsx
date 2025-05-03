import React from "react";
import { useNavigate } from "react-router-dom";
import CarouselEx from "../components/CarouselEx";
import "./Home.css";
import Cat from "../components/Cat";
import TopSellers from "../components/TopSellers";
import Customise from "../assets/customise.png";
import InstagramEmbed from "../components/InstagramEmbed";
import Combo from "../components/Combo";

const Home = () => {
  const navigate = useNavigate();

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
          onClick={() => navigate("/customise")}
        >
          Click here to customise
        </button>
      </div>

      {/* Categories */}
      <Cat />

      {/* Top sellers */}
      <TopSellers />

      {/* Combo */}
      <Combo />

      {/* About Us */}
      <div className="about-summary-container">
        <h1 className="about-heading">About Us</h1>
        <div className="about-paragraph">
          Atreyapuram, a serene village in Andhra Pradesh’s East Godavari
          district, is renowned for the traditional sweet “Putharekulu,” also
          known as the “Paper Sweet” due to its wafer-thin texture. Derived from
          the Telugu words “Putha” (coating) and “Reku” (sheet), Putharekulu is
          crafted using delicate rice starch sheets filled with ghee, sugar,
          jaggery, and sometimes dry fruits. This sweet, deeply rooted in the
          region’s cultural heritage, has been perfected in Atreyapuram, where
          the villagers' dedication, climate, and craftsmanship have turned it
          into a symbol of Andhra celebration. Traditionally prepared using
          inverted clay pots and folded with sweet fillings, Putharekulu is
          served during festivals like Sankranti and Diwali. From local fame to
          national and international reach, its popularity continues to grow,
          now with modern twists like chocolate and fruit flavors. Despite
          innovations, Atreyapuram remains the heart of authentic Putharekulu,
          preserving a rich legacy of culinary artistry passed down through
          generations.
        </div>
      </div>

      {/* insta videos */}
      <InstagramEmbed />

      {/* Newsletter */}
      <div className="newsletter-container">
        <h2 className="newsletter-heading">Subscribe to Our Newsletter</h2>
        <p className="newsletter-text">Stay updated with latest offers & new arrivals</p>
        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Enter your email"
            className="newsletter-input"
            required
          />
          <button type="submit" className="newsletter-button">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
