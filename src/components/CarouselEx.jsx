import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Slide1 from '../assets/car.png';
import Slide2 from '../assets/car2.webp';
import Slide3 from '../assets/car3.webp';
import './CarouselEx.css'; // Import the CSS file

const CarouselEx = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={Slide1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={Slide2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={Slide3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselEx;