import React, { useState } from "react";
import "./ContactPage.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaUser, FaCalendarAlt, FaUsers, FaWhatsapp, FaClock, FaInfoCircle } from "react-icons/fa";

function ContactPage() {
  const [formData, setFormData] = useState({
    studentName: "",
    dob: "",
    parentsName: "",
    phone: "",
    whatsapp: "",
    email: "",
    tourTime: "",
    infoSource: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log(formData);
    alert("Thank you for your submission! We'll contact you soon.");
  };

  return (
    <section className="contact-container">
      {/* LEFT SIDE */}
      <div className="contact-left">
        <h2 className="contact-heading">Connect with us</h2>
        <p className="contact-sub">We'd love to hear from you!</p>

        <div className="contact-info">
          <p><FaMapMarkerAlt className="contact-icon" /> 375, Prince Anwar Shah Road, Kolkata, India, West Bengal</p>
          <p><FaPhoneAlt className="contact-icon" /> +91 83368 15657</p>
          <p><FaEnvelope className="contact-icon" /> admissions@scis.co.in</p>
        </div>

        <div className="contact-info">
          <p><FaPhoneAlt className="contact-icon" /> 033 4007 2000</p>
          <p><FaPhoneAlt className="contact-icon" /> 033 4007 2444</p>
          <p><FaPhoneAlt className="contact-icon" /> 033 4000 5310</p>
          <p><FaEnvelope className="contact-icon" /> info@scis.co.in</p>
        </div>

        {/* Google Map Embed */}
        <div className="map-container">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.611090067067!2d88.36674627536177!3d22.515986779534073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027103c6c1b2b1%3A0x2d69e21ab8e81b28!2sSouth%20City%20International%20School!5e0!3m2!1sen!2sin!4v1694952000000!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="contact-right">
        <h2 className="form-heading">Get In Touch</h2>
        <p className="form-sub">Drop us your details for a quick response.</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <FaUser className="icon" />
              <input 
                type="text" 
                name="studentName"
                placeholder="Student's Name*" 
                value={formData.studentName}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <FaCalendarAlt className="icon" />
              <input 
                type="text" 
                name="dob"
                placeholder="Date of Birth* Eg. 14/01/2005" 
                value={formData.dob}
                onChange={handleChange}
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
                placeholder="Parents' Name*" 
                value={formData.parentsName}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <FaPhoneAlt className="icon" />
              <input 
                type="tel" 
                name="phone"
                placeholder="Phone Number*" 
                value={formData.phone}
                onChange={handleChange}
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
                placeholder="WhatsApp Number*" 
                value={formData.whatsapp}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <FaEnvelope className="icon" />
              <input 
                type="email" 
                name="email"
                placeholder="Email*" 
                value={formData.email}
                onChange={handleChange}
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
                <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
                <option value="12:00 PM - 1:00 PM">12:00 PM - 1:00 PM</option>
                <option value="2:00 PM - 3:00 PM">2:00 PM - 3:00 PM</option>
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

          <button type="submit" className="submit-btn">SUBMIT</button>
        </form>
      </div>
    </section>
  );
}

export default ContactPage;