import React from "react";
import "./Services.css";
import Carousel from "react-bootstrap/Carousel";

function Services() {
  return (
    <div className="services w-40">
      <div className="carousel">
        <Carousel variant="dark">
          <Carousel.Item>
            <Carousel.Caption>
              <h3>Beard + Haircut</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Services;
