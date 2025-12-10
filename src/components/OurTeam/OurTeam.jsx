import React from "react";
import "./OurTeam.css";
import Contact from "../ContactPage/ContactPage";

// Sample data for teachers (images left blank for now)
const teachers = [
  {
    id: 1,
    name: "Mr. Paresh Nath Thakur",
    occupation: "Discipliner Incharge",
    photo: "/1.jpeg",
  },
  { id: 2, name: "Ms. Riya Deb", occupation: "Head of Cultural Programs & Events", photo: "/2.jpeg" },
  {
    id: 3,
    name: "Ms. Dipa Bose",
    occupation: "PLAY HOUSE - UKG (HOD)",
    photo: "/3.jpeg",
  },
  { id: 4, name: "Mr. Ravi Shukla", occupation: "Class V-IX(HOD)", photo: "/4.jpeg" },
  { id: 5, name: "Mr. Shivam Sundar Lal", occupation: "Class X-XII(HOD)", photo: "/5.jpeg" },
  { id: 6, name: "Ms. Sweety Barma", occupation: "Examination Incharge(Junior Section)", photo: "/6.jpeg" },
  { id: 7, name: "Ms. Sarmistha Chowdhury", occupation: "Student Counsellor", photo: "/7.jpeg" },
  { id: 7, name: "Ms. Puja Agarwal", occupation: "Class I-IV(HOD)", photo: "/8.jpeg" },
  // Add more teachers as needed
];

function OurTeam() {
  return (
    <div className="our-team">
      <h2>Meet Our Teachers</h2>
      <div className="team-grid">
        {teachers.map((teacher) => (
          <div key={teacher.id} className="teacher-card">
            <div className="teacher-img">
              {teacher.photo ? (
                <img src={teacher.photo} alt={teacher.name} />
              ) : (
                <div className="placeholder">No Image</div>
              )}
            </div>
            <h3>{teacher.name}</h3>
            <p>{teacher.occupation}</p>
          </div>
        ))}
      </div>
      <Contact />
    </div>
  );
}

export default OurTeam;
