import React from "react";
import { motion } from "framer-motion";
import "./ContactPage.css";
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
  return (
    <section className="contact-container">
      {/* LEFT SIDE */}
      <motion.div
        className="contact-left"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="contact-heading">Connect with us</h2>
        <p className="contact-sub">We’d love to hear from you!</p>

        <div className="contact-info">
          <p>
            <FaMapMarkerAlt /> 375, Prince Anwar Shah Road, Kolkata, India
          </p>
          <p>
            <FaPhoneAlt /> +91 83368 15657
          </p>
          <p>
            <FaEnvelope /> admissions@scis.co.in
          </p>
        </div>

        <div className="contact-info">
          <p>
            <FaPhoneAlt /> 033 4007 2000
          </p>
          <p>
            <FaPhoneAlt /> 033 4007 2444
          </p>
          <p>
            <FaPhoneAlt /> 033 4000 5310
          </p>
          <p>
            <FaEnvelope /> info@scis.co.in
          </p>
        </div>

        {/* Google Map Embed */}
        <motion.div
          className="map-container"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.611090067067!2d88.36674627536177!3d22.515986779534073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027103c6c1b2b1%3A0x2d69e21ab8e81b28!2sSouth%20City%20International%20School!5e0!3m2!1sen!2sin!4v1694952000000!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </motion.div>
      </motion.div>

      {/* RIGHT SIDE */}
      <motion.div
        className="contact-right"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="form-heading">Get In Touch</h2>
        <p className="form-sub">Drop us your details for a quick response.</p>

        <form className="contact-form">
          <motion.div
            className="form-row"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="form-group">
              <FaUser className="icon" />
              <input type="text" placeholder="Student's Name*" required />
            </div>
            <div className="form-group">
              <FaCalendarAlt className="icon" />
              <input type="text" placeholder="Date of Birth*" required />
            </div>
          </motion.div>

          <div className="form-row">
            <div className="form-group">
              <FaUsers className="icon" />
              <input type="text" placeholder="Parents' Name*" required />
            </div>
            <div className="form-group">
              <FaPhoneAlt className="icon" />
              <input type="tel" placeholder="Phone Number*" required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <FaWhatsapp className="icon" />
              <input type="tel" placeholder="WhatsApp Number*" required />
            </div>
            <div className="form-group">
              <FaEnvelope className="icon" />
              <input type="email" placeholder="Email*" required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group full">
              <FaClock className="icon" />
              <select>
                <option value="">School Tour Time Slot*</option>
                <option>10:00 AM - 11:00 AM</option>
                <option>12:00 PM - 1:00 PM</option>
                <option>2:00 PM - 3:00 PM</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group full">
              <FaInfoCircle className="icon" />
              <select>
                <option value="">Source of Information*</option>
                <option>Website</option>
                <option>Friends</option>
                <option>Social Media</option>
              </select>
            </div>
          </div>

          <motion.button
            type="submit"
            className="submit-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            SUBMIT
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}

export default ContactPage;
