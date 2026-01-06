import React, { useState } from "react";
import "./EventGallery.css";

const images = [
  "/Lakshya/1000028254.JPG",
  "/Lakshya/1000028166.JPG",
  "/Lakshya/1000028148.JPG",
  "/Lakshya/1000028152.JPG",
  "/Lakshya/1000028160.JPG",
];

function Lakshya() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="gallery-page">
      {/* Simple Header */}
      <header className="gallery-header">
        <h1>Laksh</h1>
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