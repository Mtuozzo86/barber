import React from "react";
import "./Services.css";
import Carousel from "react-bootstrap/Carousel";

function Services() {
  return (
    <div className="services w-40">
      <h1 style={{ letterSpacing: 1 }} className="text-center p-2">
        SERVICES
      </h1>
      <div className="carousel">
        <Carousel variant="dark">
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img"
              src="https://static.glossgenius.com/public/portfolioimage/259235/image/medium-data"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Beard + Haircut</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img"
              src="https://static.glossgenius.com/public/service/743716/image/image.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Beard</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img"
              src="https://static.glossgenius.com/public/portfolioimage/414dd145f51728346aaa524ec9b5c9abd993de26/image/medium-d30aee182246d748a0cbb64e90abb2b0.jpeg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Haircut</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Services;
