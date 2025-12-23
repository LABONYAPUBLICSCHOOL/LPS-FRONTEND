import React, { useEffect, useRef, useState } from "react";
import "./Welcome.css";

function Welcome() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // triggers only once
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section className="welcome" ref={sectionRef}>
      <div className={`welcome-container ${isVisible ? "visible" : ""}`}>
        <div className="welcome-left">
          <img src="./kids.jpg" alt="School" className="main-img" />
        </div>

        <div className="welcome-right">
          <h2>
            Welcome To <span className="heading">Labonya Public School</span>
          </h2>
          <p>
            Labonya Public School, established in 2017, envisions the cultivation 
            of young minds into truly global citizens within a nurturing and 
            compassionate atmosphere. The pulsating vitality permeates through the 
            students and teachers, creating a vibrant and dynamic learning environment.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Welcome;
