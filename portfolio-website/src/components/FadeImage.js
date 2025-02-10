import React, { useState, useEffect } from "react";
import "../assets/styles/FadeImage.css";

const FadeImage = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="fade-image-container">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt="Fading content"
          className={`fade-image ${index === currentImageIndex ? "fade-in" : "fade-out"}`}
        />
      ))}
    </div>
  );
};

export default FadeImage;