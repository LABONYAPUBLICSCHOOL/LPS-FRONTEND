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
    "English–medium co-ed school located in Salkia, Howrah",
    "Kindergarten & Primary levels offered in a secure environment",
    "Dedicated and motivated faculty committed to student growth",
    "Curriculum designed to build global thinking with strong value foundation",
    "Emphasis on technology-aware learning for today’s learners",
    "Focus on creativity, problem-solving & critical thinking",
    "Active parent-teacher communication & collaboration",
    "Inclusive support for learners with diverse academic needs",
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
          <img src="school.jpg" alt="School" />
        </div>
      </div>
    </section>
  );
}

export default ChooseUs;
