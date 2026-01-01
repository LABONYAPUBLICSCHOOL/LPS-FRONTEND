import React from "react";
import "./VisionMission.css";
import banner from "../../assets/Vision-Mission.jpg";
import Contact from "../ContactPage/ContactPage";

function VisionMission() {
  return (
    <div className="vision-mission">
      {/* Banner Image */}
      <div className="banner">
        <img src={banner} alt="School Banner" />
      </div>

      {/* About Us */}
      <section className="about">
        <h2>About Us</h2>
        <p>
          Labonya Public School, located in Salkia, Howrah is a premier
          institution known for its commitment to holistic education and
          academic excellence. Established with the vision of nurturing global citizens.
        </p>
        <p>
          The campus is equipped with state-of-the-art infrastructure designed
          to support modern learning. Spacious, air-conditioned classrooms are
          enhanced with advanced audio-visual teaching aids.
        </p>
        <p>
          Sports and co-curricular activities are given significant importance,
          with multi-sports facilities. Labonya Public School stands as a beacon of quality
          education in the region.
        </p>
        <p>
          It has been 8 years since the inception of the school and the school
          is running successfully with the cooperation of all faculty.
        </p>
      </section>

      {/* Vision */}
      <section className="vision">
        <h2>Vision</h2>
        <p>
          Labonya Public School is committed to delivering a transformative
          education that equips students for a dynamic world. Our collaborative
          environment ignites a passion for growth, enabling students to become
          proactive leaders and responsible global citizens.
        </p>
      </section>

      {/* Mission */}
      <section className="mission">
        <h2>Mission</h2>
        <p>
          Our mission is to inspire students to discover their potential through
          lifelong learning in a supportive environment. We foster creativity,
          critical thinking, confidence, and compassion to create positive
          change in society.
        </p>
      </section>

      <Contact />
    </div>
  );
}

export default VisionMission;
