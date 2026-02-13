import React, { useState } from "react";
import "./EventGallery.css";

const images = [
  "/Farewell/1.jpg",
  "/Farewell/2.jpg",
  "/Farewell/3.jpg",
  "/Farewell/5.jpg",
  "/Farewell/6.jpg",
  "/Farewell/7.jpg",
  "/Farewell/8.jpg",
  "/Farewell/9.jpg",
];

function Lakshya() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="gallery-page">
      {/* Simple Header */}
      <header className="gallery-header">
        <h1>Farewell 2025 Batch</h1>
      </header>

      {/* Tight Grid - No Gap Between Images */}
      <div className="photo-grid">
        {images.map((img, index) => (
          <div 
            className="photo-item" 
            key={index}
            onClick={() => setSelectedImage(img)}
          >
            <img 
              src={img} 
              alt=""
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Simple Modal */}
      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-overlay">
            <img 
              src={selectedImage} 
              alt=""
              className="modal-image"
            />
            <div className="image-counter">
              {images.indexOf(selectedImage) + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Lakshya;