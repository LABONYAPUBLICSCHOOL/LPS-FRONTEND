import React from "react";
import "./Gallery.css";  // Shared CSS
import Contact from "../components/ContactPage/ContactPage";

// List ALL your Christmas photos here
const christmasImages = [
  "/images/gallery/christmas-2025/photo1.jpg",
  "/images/gallery/christmas-2025/photo2.jpg",
  "/images/gallery/christmas-2025/photo3.jpg",
  // Add as many as you have...
];

function GalleryChristmas() {
  return (
    <div className="gallery-page">
      <header className="gallery-header">
        <h1>Christmas 2025</h1>
        <p>Celebrating the joy of Christmas with our school family.</p>
      </header>

      <div className="gallery-grid">
        {christmasImages.map((src, index) => (
          <div key={index} className="gallery-item">
            <img src={src} alt={`Christmas 2025 - ${index + 1}`} loading="lazy" />
          </div>
        ))}
      </div>

      <Contact />
    </div>
  );
}

export default GalleryChristmas;