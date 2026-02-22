import React, { useState, useEffect, useRef } from "react";
import "./ContactPage.css";
import emailjs from "@emailjs/browser";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUser,
  FaCalendarAlt,
  FaUsers,
  FaWhatsapp,
  FaClock,
  FaInfoCircle,
} from "react-icons/fa";

function ContactPage() {
  const [formData, setFormData] = useState({
    studentName: "",
    dob: "",
    parentsName: "",
    phone: "",
    whatsapp: "",
    email: "",
    tourTime: "",
    infoSource: "",
  });

  const [loading, setLoading] = useState(false);

  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);

    return () => {
      if (leftRef.current) observer.unobserve(leftRef.current);
      if (rightRef.current) observer.unobserve(rightRef.current);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone" || name === "whatsapp") {
      if (!/^\d{0,10}$/.test(value)) return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_2pcb7ku",
        "template_ihqf119",
        formRef.current,
        "PEe-aWl9L-0yiWYhs"
      )
      .then(() => {
        alert("Thank you! Your form has been submitted successfully.");
        setFormData({
          studentName: "",
          dob: "",
          parentsName: "",
          phone: "",
          whatsapp: "",
          email: "",
          tourTime: "",
          infoSource: "",
        });
        setLoading(false);
      })
      .catch(() => {
        alert("Oops! Something went wrong. Please try again.");
        setLoading(false);
      });
  };

  return (
    <section className="contact-container">
      <div className="contact-left fade-left" ref={leftRef}>
        <h2 className="contact-heading">Connect with us</h2>
        <p className="contact-sub">We'd love to hear from you!</p>

        <div className="contact-info">
          <p>
            <FaMapMarkerAlt className="contact-icon" /> 1, Shri Aurobindo Rd,
            Babudanga, Bandhaghat, Salkia, Howrah, Kolkata, West Bengal 711106
          </p>
          <p>
            <FaPhoneAlt className="contact-icon" /> +91 7439893586
          </p>
          <p>
            <FaEnvelope className="contact-icon" />
            labonyapublicschool98@gmail.com
          </p>
        </div>

        <div className="map-container">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.1443034478525!2d88.34571307507862!3d22.601695979470964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277ef64bf8251%3A0xa1f7ec1ee032ed6f!2sLabonya%20Public%20School!5e1!3m2!1sen!2sin!4v1771742734185!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <div className="contact-right fade-right" ref={rightRef}>
        <h2 className="form-heading">Get In Touch</h2>
        <p className="form-sub">Drop us your details for a quick response.</p>

        <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <FaUser className="icon" />
              <input
                type="text"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                placeholder="Student's Name*"
                required
              />
            </div>

            <div className="form-group">
              <FaCalendarAlt className="icon" />
              <input
                type="text"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                placeholder="Date of Birth*"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <FaUsers className="icon" />
              <input
                type="text"
                name="parentsName"
                value={formData.parentsName}
                onChange={handleChange}
                placeholder="Parents' Name*"
                required
              />
            </div>

            <div className="form-group">
              <FaPhoneAlt className="icon" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number*"
                maxLength="10"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <FaWhatsapp className="icon" />
              <input
                type="tel"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                placeholder="WhatsApp Number*"
                maxLength="10"
                required
              />
            </div>

            <div className="form-group">
              <FaEnvelope className="icon" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email*"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group full">
              <FaClock className="icon" />
              <select
                name="tourTime"
                value={formData.tourTime}
                onChange={handleChange}
                required
              >
                <option value="">School Tour Time Slot*</option>
                <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>
                <option value="12:00 PM - 1:00 PM">12:00 PM - 1:00 PM</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group full">
              <FaInfoCircle className="icon" />
              <select
                name="infoSource"
                value={formData.infoSource}
                onChange={handleChange}
                required
              >
                <option value="">Source of Information*</option>
                <option value="Website">Website</option>
                <option value="Friends">Friends</option>
                <option value="Social Media">Social Media</option>
              </select>
            </div>
          </div>

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Sending..." : "SUBMIT"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactPage;