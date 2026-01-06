import React, { useState, useEffect } from "react";
import "./Slider.css";

function Slider() {
  const images = [
    "/img1.jpg",
    "/school.jpg",
    "/img3.jpg"
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // 3 seconds
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="slider">
      {images.map((img, index) => (
        <div
          key={index}
          className={`slide ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      ))}
    </div>
  );
}

export default Slider;
