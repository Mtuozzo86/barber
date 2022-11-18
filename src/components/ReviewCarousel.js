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

        <Carousel.Caption className="">
          <h5>{item.body}</h5>
          <br/>
          <p>{item.name}</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  });

  return (
    <Carousel
    interval={2900}
      controls={false}
      // activeIndex={1}
      indicators={false}
    >
      {customReviews}
    </Carousel>
  );
}

export default ReviewCarousel;
