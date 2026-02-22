import React, { useState, useRef } from "react";
import "./WorkWithUs.css";
import emailjs from "@emailjs/browser";

function WorkWithUs() {
  const [formData, setFormData] = useState({
    post: "",
    grade: "",
    subject: "",
    name: "",
    email: "",
    message: "",
  });

  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2pcb7ku",
        "template_3d5857i",
        formRef.current,
        "PEe-aWl9L-0yiWYhs"
      )
      .then(() => {
        alert("Application submitted successfully!");
        setFormData({
          post: "",
          grade: "",
          subject: "",
          name: "",
          email: "",
          message: "",
        });
      })
      .catch(() => {
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <div className="work-page">
      <h2>Work With Us</h2>
      <p className="subtitle">As you learn, you grow. As you grow, you learn</p>
      <p className="description">
        Are you energetic, adaptable and ready to learn? At Labonya Public
        School, we don’t offer just a job — we offer a meaningful and rewarding
        career.
      </p>

      <form ref={formRef} className="work-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Post Applying For*</label>
            <select name="post" value={formData.post} onChange={handleChange} required>
              <option value="">Select</option>
              <option value="Teacher">Teacher</option>
              <option value="Admin">Admin</option>
            </select>
          </div>

          <div className="form-group">
            <label>Grade*</label>
            <select name="grade" value={formData.grade} onChange={handleChange} required>
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Subject*</label>
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="Math">Math</option>
              <option value="English">English</option>
              <option value="Science">Science</option>
              <option value="History">History</option>
              <option value="Geography">Geography</option>
              <option value="Commerce">Commerce</option>
              <option value="Hindi">Hindi</option>
            </select>
          </div>

          <div className="form-group">
            <label>Name*</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group full-width">
            <label>Email*</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group full-width">
            <label>Write To Us</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
        </div>

        <button type="submit" className="submit-btn">
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default WorkWithUs;