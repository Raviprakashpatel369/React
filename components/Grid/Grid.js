import React, { useState } from "react";
import "./Grid.css";
import Carousel from "./../Carousel/Carousel";

function Grid() {
  const gridData = [
    {
      image:
        "https://static.vecteezy.com/system/resources/previews/002/215/385/large_2x/continuous-line-drawing-of-of-abstract-beautiful-woman-s-face-minimalist-continuous-linear-sketch-woman-face-vector.jpg",
      title: "BEHIND THE SCENES",
      description: "Collaboration Secrets: Design X Engineering",
    },
    {
      image:
        "https://i.pinimg.com/originals/de/97/e8/de97e85b04f0565c1984cee428796f07.png",
      title: "PRODUCT DESIGN",
      description:
        "From Web Page to Web Player: How Spotify Designed a New Homepage Experience",
    },
    {
      image:
        "https://static.vecteezy.com/system/resources/previews/002/035/933/large_2x/water-wave-logo-images-free-vector.jpg",
      title: "BEHIND THE SCENES",
      description: "Designing for the World: An Introduction to Localization",
    },
  ];

  const [indexFromChild, setIndexFromChild] = useState(0);

//   const [moveRightValue, setMoveRightValue] = useState(false);

//   const [moveLeftValue, setMoveLeftValue] = useState(false);

  const handleIndexChange = (index) => {
    setIndexFromChild(index);
  };

//   const handleMoveRightChange = (value) => {
//     setMoveRightValue(value);
//   };

//   const handleMoveLeftChange = (value) => {
//     setMoveLeftValue(value);
//   };

//   const handleClickRight = () => {
//     handleMoveRightChange(!moveRightValue);
//   };

//   const handleClickLeft = () => {
//     handleMoveLeftChange(!moveLeftValue);
//   };

  return (
    <div className="grid">
      <div className="controlSection">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            style={{ transform: "rotate(180deg)" }}
          >
            <path fill="#191414" d="M9 18v-5l8 5V6l-8 5V6H7v12z" />
          </svg>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            style={{ transform: "rotate(undefineddeg)" }}
          >
            <path fill="#191414" d="M9 18v-5l8 5V6l-8 5V6H7v12z" />
          </svg>
        </div>
      </div>

      <div className="descriptionSection">
        <p>{gridData[indexFromChild].title}</p>
        <h1>{gridData[indexFromChild].description}</h1>
      </div>
      <div className="carouselSection">
        {/* <img src="https://www.bing.com/images/blob?bcid=RIkpEs-i21EGqxcxoNWLuD9SqbotqVTdP3M" alt="Carousel Images" /> */}
        <Carousel imagesObj={gridData} onIndexChange={handleIndexChange} />
      </div>
    </div>
  );
}

export default Grid;
