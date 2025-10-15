import React, { useEffect, useRef, useState } from "react";
import "./ChooseUs.css";
import { FaStar } from "react-icons/fa";

function ChooseUs() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const features = [
    "CCTV Secured 3.59-acre campus with 70% open space",
    "1:17 Teacher Student Ratio with an Experiential Pedagogical Approach",
    "Experienced, dedicated, and self-motivated teachers",
    "Globally relevant curriculum with Indian roots in value and culture",
    "Technology driven learning",
    "Future-ready education with AI, STEM and Robotics",
    "Emphasis on creative thinking, problem-solving and critical thinking",
    "Foreign Language programs and cultural exchange initiatives",
    "Robust sports program with diverse opportunities",
    "Personalized career guidance and internship support",
    "Active parent-teacher communication & partnership programs",
    "Dedicated support for students with special needs"
  ];

  return (
    <section className="why" ref={sectionRef}>
      <div className={`why-container ${isVisible ? "visible" : ""}`}>
        <div className="why-left">
          <h2>
            Why Choose <span className="highlight">LPS?</span>
          </h2>
          <ul>
            {features.map((feature, index) => (
              <li key={index}>
                <FaStar className="icon" /> {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="why-right">
          <img src="school.png" alt="School" />
        </div>
      </div>
    </section>
  );
}

export default ChooseUs;
