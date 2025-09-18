import React from "react";
import "./Welcome.css";

function Welcome() {
  return (
    <section className="welcome">
      <div className="welcome-container">

        {/* Left Side Image */}
        <div className="welcome-left">
          <img src="./kids.jpg" alt="School" className="main-img" />
        </div>

        {/* Right Side Text */}
        <div className="welcome-right">
          <h2>
            Welcome To <span className="heading">Labonya Public School</span>
          </h2>
          <p>
            Labonya Public School, established in 2009, envisions the cultivation 
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
