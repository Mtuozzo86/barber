import React from "react";
import "./ReviewCarousel.css";
import Carousel from "react-bootstrap/Carousel";

function ReviewCarousel() {
  return (
    <Carousel className="carousel">
      <Carousel.Item>
        <img className="carousel-fix" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ReviewCarousel;
