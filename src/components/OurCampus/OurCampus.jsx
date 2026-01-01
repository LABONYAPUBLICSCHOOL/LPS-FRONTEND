import React from "react";
import "./OurCampus.css";
import Contact from "../ContactPage/ContactPage";

function OurCampus() {
  return (
    <div>
      <div className="campus-container">
        <h1 className="campus-title">Our Campus</h1>

        <div className="campus-section fade-up">
          <h2>I. Academic Infrastructure</h2>
          <p>
            Labonaya Public School has invested in creating a conducive learning
            environment with ergonomically designed chairs and tables . Classrooms are equipped with cutting-edge technology
            like interactive Smart Boards, LCD projectors, and HDTVs, enhancing
            teaching methods and engaging students effectively.
          </p>
        </div>

        <div className="campus-section fade-up">
          <h2>II. Resource Center</h2>
          <p>
            The Resource Center is a veritable treasure trove of knowledge,
            brimming with an extensive collection of books catering to both
            junior and senior students. With libraries for each age
            group, we provide a tailored learning experience. 
          </p>
        </div>

        

        <div className="campus-section fade-up">
          <h2>III. Art and Craft Atelier</h2>
          <p>
            The Art and Craft Centre allows children to engage in art, craft,
            and ceramics, providing an outlet for creativity, imagination, and
            expression.
          </p>
        </div>

        <div className="campus-section fade-up">
          <h2>IV. Dance Studio</h2>
          <p>
            Our Dance Studio offers students a platform to master Indian,
            Western, and contemporary dance forms, fostering cross-cultural
            learning and appreciation of performing arts.
          </p>
        </div>

        

        <div className="campus-section fade-up">
          <h2>V. The Zen Space</h2>
          <p>
            A serene environment for Yoga and meditation, allowing students to
            develop mindfulness, calm, and emotional balance amidst academic
            demands.
          </p>
        </div>
        

        <div className="campus-section fade-up">
          <h2>VI. Sports Infrastructure</h2>
          <p>
            <b>Outdoor Games:</b> Well-maintained fields for cricket,
             encourage active participation and teamwork.
          </p>
          <p>
            <b>Indoor Games:</b>  Chess, and Carrom promote mental
            agility and strategy in a fun, engaging way.
          </p>
          <p>
            Our infrastructure builds physical fitness, teamwork, and
            sportsmanship among students.
          </p>
        </div>
      </div>
      <Contact />
    </div>
  );
}

export default OurCampus;
