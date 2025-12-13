import React from "react";
import "./VisionMission.css";
import banner from "../../assets/Vision-Mission.jpg";
import Vision from "../../assets/vision.jpg";
import Mission from "../../assets/mission.jpeg";
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
          Labonaya Public School, located in the heart of Kolkata, is a premier
          institution known for its commitment to holistic education and
          academic excellence. It is housed in a 5 storied building comprising a
          built-up area of 127000 sq.ft.(approx.) and a campus area of 3.6
          acres. Established with the vision of nurturing global citizens, the
          school follows an international curriculum - IGCSE (Cambridge) and is
          also affiliated to the CISCE.
        </p>
        <p>
          The campus is equipped with state-of-the-art infrastructure designed
          to support modern learning. Spacious, air-conditioned classrooms are
          enhanced with advanced audio-visual teaching aids. The school boasts
          fully equipped science laboratories, two well equipped libraries,
          computer labs, and an auditorium for cultural events.
        </p>
        <p>
          Sports and co-curricular activities are given significant importance,
          with multi-sports facilities and well-maintained playground. The
          school also houses a music room, dance room, art studio, and robotics
          lab, ensuring an all-rounded development environment. With its
          world-class amenities and dedicated faculty, Labonaya Public School
          stands as a beacon of quality education in the region.
        </p>
        <p>
          It has been 16 years since the inception of the school and the school
          is running successfully with the assistance and cooperation from all
          stakeholders.
        </p>
        <p>
          So if you are looking for the perfect school to nurture your child’s
          potential, enroll your child today and give your child the foundation
          they need to thrive in a global world.
        </p>
      </section>

      {/* Vision */}
      <section className="vision">
        <div className="vision-content">
          <div className="vision-text">
            <h2>Vision</h2>
            <p>
              Labonaya Public School is committed to delivering a transformative
              education that equips students for a dynamic world. Our
              collaborative environment ignites a passion for growth, enabling
              students to become proactive leaders. With excellence as our
              guide, we aim to redefine knowledge ecosystems and shape a better
              future for all.
            </p>
          </div>
          <div className="vision-img">
            <img src={Vision} alt="Vision" />
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="mission">
        <div className="mission-content">
          <div className="mission-img">
            <img src={Mission} alt="Mission" />
          </div>
          <div className="mission-text">
            <h2>Mission</h2>
            <p>
              Our Mission is to inspire students to discover their potential
              through lifelong learning in a dynamic and supportive environment.
              We foster creativity, critical thinking, and curiosity, providing
              an exceptional education that cultivates success, confidence, and
              compassion, making a positive impact in communities and beyond.
            </p>
          </div>
        </div>
      </section>
      <Contact />
    </div>
  );
}

export default VisionMission;
