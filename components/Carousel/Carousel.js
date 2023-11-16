import React, { useState, useEffect } from "react";
import "./Carousel.css";

function ImageSlider({ imagesObj, onIndexChange }) {
    
  const [index, setIndex] = useState(0);
  const images = imagesObj.map(function (array) {
    return array.image;
  });

  //   const moveLeft = () => {
  //     setIndex((index - 1 + images.length) % images.length);
  //   };

  useEffect(() => {
    const moveRight = () => {
      setIndex((index + 1) % images.length);
      onIndexChange((index + 1) % images.length);
    };
    const intervalId = setInterval(() => {
      moveRight();
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [index, onIndexChange, images.length]);
  return (
    <div className="container">
      <div className="images">
        {images.map((image, i) => (
          <img
            key={i}
            src={image}
            alt=""
            className="image"
            style={{
              zIndex: i === index ? 3 : 1,
              transform: i === index ? "none" : "scale(0.9) translateX(10%)",
              transition: i === index ? "all 0.5s" : "all 1s",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
