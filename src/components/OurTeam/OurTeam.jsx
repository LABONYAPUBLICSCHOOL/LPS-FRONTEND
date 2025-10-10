import React from "react";
import "./OurTeam.css";

// Sample data for teachers (images left blank for now)
const teachers = [
  { id: 1, name: "Mrs. Anjali Sharma", occupation: "Mathematics Teacher", photo: "" },
  { id: 2, name: "Mr. Rohan Gupta", occupation: "Physics Teacher", photo: "" },
  { id: 3, name: "Ms. Priya Singh", occupation: "Chemistry Teacher", photo: "" },
  { id: 4, name: "Mr. Arjun Mehta", occupation: "English Teacher", photo: "" },
  { id: 5, name: "Ms. Kavita Roy", occupation: "Biology Teacher", photo: "" },
  { id: 6, name: "Mr. Vivek Jain", occupation: "History Teacher", photo: "" },
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
    </div>
  );
}

export default OurTeam;
