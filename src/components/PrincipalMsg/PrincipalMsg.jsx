import React from "react";
import "./PrincipalMsg.css";
import PM from "../../assets/PM.png"; // Add your banner image

function PrincipalMsg() {
  return (
    <div className="principal-msg">
      {/* Banner Section */}
      <div className="banner">
        <img src={PM} alt="Principal Banner" />
        <div className="banner-text">
          
        </div>
      </div>

      {/* Message Section */}
      <section className="message-container">
        <div className="message-card">
          <h2>Dear Parents and Guardians,</h2>
          <p>
            As we continue on our journey at <b>Labonya Public School</b>, I
            would like to take a moment to reaffirm our commitment to providing
            a world-class education that fosters academic excellence, personal
            growth, and a sense of community.
          </p>
          <p>
            As the Principal, I am honored to lead our
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
              <b>Sarita Roy</b>
            </p>
            <p>Principal, Labonya Public School</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PrincipalMsg;
