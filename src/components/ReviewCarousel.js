import { useState } from "react";
import "./ReviewCarousel.css";
import Carousel from "react-bootstrap/Carousel";
import { reviews } from "../data";

function ReviewCarousel() {
  // const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // };

  const customReviews = reviews.map((item, index) => {
    return (
      <Carousel.Item key={index}>
        <img className="carousel-fix" />

        <Carousel.Caption>
          <blockquote className="blockquote">{item.body}</blockquote>
          <br />
          <figcaption className="blockquote-footer">{item.name}</figcaption>
        </Carousel.Caption>
      </Carousel.Item>
    );
  });

  return (
    <Carousel
      variant="dark"
      // interval={3000}
      controls={false}
      // activeIndex={5}
      indicators={false}
    >
      {customReviews}
    </Carousel>
  );
}

export default ReviewCarousel;
