import React, { useState } from "react";
import "./EventGallery.css";

const images = [
  "/Christmas/1.jpeg",
  "/Christmas/2.jpeg",
  "/Christmas/3.jpeg",
  "/Christmas/4.jpeg",
  "/Christmas/5.jpeg",
];

function Christmas() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="event-gallery">
      {/* Hero Section */}
      <div className="gallery-hero">
        <h2>🎄 Christmas Celebration 2025</h2>
        <p>Moments full of joy, lights & togetherness</p>
      </div>

      {/* Image Grid */}
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div className="gallery-card" key={index}>
            <img
              src={img}
              alt={`Christmas ${index + 1}`}
              onClick={() => setSelectedImage(img)}
            />
            <div className="image-overlay">
              <span>View</span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <span className="close-btn">&times;</span>
          <img src={selectedImage} alt="Full View" />
        </div>
      )}
    </div>
  );
}

export default Christmas;
