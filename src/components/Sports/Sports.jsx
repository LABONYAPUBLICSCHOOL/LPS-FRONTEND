import React, { useState } from "react";
import "./Sports.css";
import Contact from "../ContactPage/ContactPage";

function Sports() {
  const [selectedSport, setSelectedSport] = useState("Cricket");

  const sportsGallery = {
    Football: ["", "", ""],
    Cricket: ["", "", ""],
    Basketball: ["", "", ""],
    Badminton: ["", "", ""],
    Carrom: ["", "", ""],
  };

  return (
    <div className="sports-page">
      {/* Banner Section */}
      <div className="sports-banner">
        <div className="overlay">
          <h1>Sports at Labonaya Public School</h1>
          <p>Unleashing Athletic Excellence</p>
        </div>
      </div>

      {/* Content Section */}
      <section className="sports-content">
        <h2>
          Sports at Labonaya Public School: Unleashing Athletic Excellence
        </h2>
        <p>
          At Labonaya Public School, we believe that sports play a vital role in
          shaping the minds and bodies of our students. Our comprehensive sports
          program is designed to foster a culture of athletic excellence,
          promoting physical fitness, talent nurturing, and essential life
          skills like teamwork, discipline, and resilience.
        </p>

        <h3>A Wide Range of Sports and Activities</h3>
        <ul>
          <li>Football</li>
          <li>Cricket</li>
          <li>Basketball</li>
          <li>Badminton</li>
          <li>Carrom</li>
          <li>Volleyball</li>
          <li>Kho-Kho</li>
          <li>Table Tennis</li>
          <li>Chess</li>
          <li>Gymnastics</li>
          <li>Skating</li>
          <li>Rugby</li>
          <li>Karate</li>
          <li>Athletics</li>
        </ul>

        <h3>Expert Coaching and Mentorship</h3>
        <p>
          Our experienced and dedicated sports faculty provide regular training
          sessions, rigorous practice, and guidance to help our students excel
          in their preferred sporting disciplines. We encourage participation in
          inter-school and regional competitions, fostering a spirit of healthy
          competition and teamwork.
        </p>

        <h3>Beyond Winning: Building Life Skills</h3>
        <p>
          At Labonaya Public School, we believe that sports are not just about
          winning medals, but about developing essential life skills like
          leadership, teamwork, perseverance, and time management.
        </p>
      </section>

      {/* Sports Buttons */}
      <div className="sports-buttons">
        {Object.keys(sportsGallery).map((sport) => (
          <button
            key={sport}
            className={selectedSport === sport ? "active" : ""}
            onClick={() => setSelectedSport(sport)}
          >
            {sport}
          </button>
        ))}
      </div>

      {/* Gallery Section */}
      <div className="sports-gallery">
        <h2>{selectedSport} Gallery</h2>
        <div className="gallery-grid">
          {sportsGallery[selectedSport].map((img, index) => (
            <div key={index} className="gallery-card">
              {img ? (
                <img src={img} alt={`${selectedSport} ${index}`} />
              ) : (
                <div className="placeholder">No Image</div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Contact />
    </div>
  );
}

export default Sports;
