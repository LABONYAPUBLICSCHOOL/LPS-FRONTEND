import React from "react";
import "./PrincipalMsg.css";
// import banner from "../assets/principal-banner.jpg"; // Add your banner image
import Contact from "../ContactPage/ContactPage";

function PrincipalMsg() {
  return (
    <div className="principal-msg">
      {/* Banner Section */}
      <div className="banner">
        <img src="#" alt="Principal Banner" />
        <div className="banner-text">
          <h1>Principal's Message</h1>
        </div>
      </div>

      {/* Message Section */}
      <section className="message-container">
        <div className="message-card">
          <h2>Dear Parents and Guardians,</h2>
          <p>
            As we continue on our journey at <b>Labonaya Public School</b>, I
            would like to take a moment to reaffirm our commitment to providing
            a world-class education that fosters academic excellence, personal
            growth, and a sense of community.
          </p>
          <p>
            As the Vice Principal and Acting Principal, I am honored to lead our
            school community and ensure that our mission and values remain at
            the forefront of everything we do. Our team of dedicated educators
            and staff are passionate about creating a safe, inclusive, and
            engaging learning environment that promotes academic achievement,
            character development, and a lifelong love for learning.
          </p>
          <p>
            We value the trust you have placed in us and look forward to
            continuing to work collaboratively with you to ensure the success
            and well-being of your child.
          </p>
          <p>
            If you have any questions or concerns, please do not hesitate to
            reach out to me or our administration team.
          </p>
          <p>Thank you for your continued support.</p>

          <div className="signature">
            <p>
              <b>Warm regards,</b>
            </p>
            <p>
              <b>Rupika Nath</b>
            </p>
            <p>Vice Principal, Labonaya Public School</p>
          </div>
        </div>
      </section>
      <Contact />
    </div>
  );
}

export default PrincipalMsg;
