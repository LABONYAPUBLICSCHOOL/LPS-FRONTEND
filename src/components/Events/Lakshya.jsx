import React from "react";
import "./Gallery.css";  // Same shared CSS
import Contact from "../components/ContactPage/ContactPage";

const lakshyaImages = [
  "/images/gallery/lakshya/photo1.jpg",
  "/images/gallery/lakshya/photo2.jpg",
  "/images/gallery/lakshya/photo3.jpg",
  // Add all your Lakshya photos
];

function GalleryLakshya() {
  return (
    <div className="gallery-page">
      <header className="gallery-header">
        <h1>Lakshya</h1>
        <p>Our spectacular annual day celebration full of talent and energy.</p>
      </header>

      <div className="gallery-grid">
        {lakshyaImages.map((src, index) => (
          <div key={index} className="gallery-item">
            <img src={src} alt={`Lakshya - ${index + 1}`} loading="lazy" />
          </div>
        ))}
      </div>

      <Contact />
    </div>
  );
}

export default GalleryLakshya;