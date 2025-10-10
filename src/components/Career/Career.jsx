import React from "react";
import "./Career.css";
// import banner from "../assets/career-banner.jpg"; // add your banner image here

function Career() {
  return (
    <div className="career-page">
      {/* Banner Section */}
      <div className="career-banner">
        <img src="" alt="Career Guidance Banner" className="banner-img" />
        <div className="banner-overlay">
          <h1>Career Guidance & Counselling Support</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="career-content">
        <p>
          The school has recently expanded its support system by welcoming a dedicated full-time
          counselor on board. With a wealth of expertise and a passion for student development, our
          counselor orchestrates a dynamic array of activities throughout the academic year. These
          activities are meticulously designed to enrich students' personal and academic journeys.
        </p>

        <p>
          Our counselor curates a diverse range of opportunities aimed at profile-building,
          empowering students to showcase their talents and strengths. From engaging in stimulating
          competitions to attending enlightening lectures delivered by esteemed university
          professors, students are encouraged to explore their interests and aspirations.
        </p>

        <p>
          In addition to these endeavors, our counselor collaborates closely with leading
          organizations to offer workshops, internships, and other experiential learning
          opportunities. These partnerships provide students with real-world insights and practical
          skills, equipping them with the tools they need to thrive in an ever-evolving global
          landscape.
        </p>

        <p>
          Through these multifaceted initiatives, our counselor plays a pivotal role in nurturing
          students' holistic development, fostering a culture of excellence, curiosity, and lifelong
          learning within our school community.
        </p>
      </div>
    </div>
  );
}

export default Career;
