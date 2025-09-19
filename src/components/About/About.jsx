import React from "react";
import "./About.css";
import { motion } from "framer-motion";

function About() {
  const team = [
    { id: 1, name: "John Smith", role: "Principal", img: "/team1.jpg" },
    { id: 2, name: "Sophia Johnson", role: "Vice Principal", img: "/team2.jpg" },
    { id: 3, name: "Michael Brown", role: "Head of Academics", img: "/team3.jpg" },
    { id: 4, name: "Emily Davis", role: "Coordinator", img: "/team4.jpg" },
  ];

  return (
    <div className="about">
      {/* Hero */}
      <motion.div
        className="about-hero"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>About Our School</h1>
        <p>
          Shaping bright futures with knowledge, discipline, and values. We believe in
          nurturing every child’s potential through academic excellence and holistic growth.
        </p>
      </motion.div>

      {/* Vision & Mission */}
      <motion.section
        className="about-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">Our Vision & Mission</h2>
        <div className="vm-container">
          <div className="card">
            <h3>Vision</h3>
            <p>
              To nurture young minds with knowledge, creativity, and values,
              empowering them to become leaders of tomorrow.
            </p>
          </div>
          <div className="card">
            <h3>Mission</h3>
            <p>
              To provide a holistic learning environment that encourages
              innovation, discipline, and excellence in academics and beyond.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Core Values */}
      <motion.section
        className="about-section values"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">Our Core Values</h2>
        <ul className="values-list">
          <li>Integrity & Respect</li>
          <li>Innovation & Curiosity</li>
          <li>Excellence in Learning</li>
          <li>Compassion & Service</li>
        </ul>
      </motion.section>

      {/* Principal Message */}
      <motion.section
        className="about-section principal"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">Principal’s Message</h2>
        <div className="principal-box">
          <img src="/principal.jpg" alt="Principal" />
          <div>
            <p>
              At our school, every child is unique and deserves opportunities to
              discover their potential. With a dedicated faculty, modern
              infrastructure, and a nurturing environment, we inspire students to
              excel in academics, sports, and values.
            </p>
            <p>
              Our goal is to develop confident global citizens who are grounded in
              culture, enriched with knowledge, and prepared for the challenges of
              tomorrow.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Our Team */}
      <motion.section
        className="about-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">Meet Our Team</h2>
        <div className="team-container">
          {team.map((member) => (
            <motion.div
              key={member.id}
              className="team-card"
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <img src={member.img} alt={member.name} />
              <h4>{member.name}</h4>
              <p>{member.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
     
    </div>
  );
}

export default About;
