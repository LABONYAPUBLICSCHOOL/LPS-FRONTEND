import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section">
          <h2 className="footer-logo">LPS</h2>
          <p>
            Inspiring minds and shaping futures through holistic education and
            excellence.
          </p>
        </div>

        {/* Quick Links */}
        {/* <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/admissions">Admissions</a>
            </li>
            <li>
              <a href="/news">News & Events</a>
            </li>
            <li>
              <a href="/alumni">Incredible Alumni</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div> */}

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>
            📍 1, Shri Aurobindo Rd, Babudanga, Bandhaghat, Salkia, Howrah,
            Kolkata, West Bengal 711106
          </p>
          <p>📞 +91 7439893586</p>
          <p>📧 labonyapublicschool98@gmail.com</p>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/share/1BRGBk3yGe/">
              <FaFacebookF />
            </a>
            <a
              href="https://wa.me/917439893586"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
            </a>
            <a href="https://www.instagram.com/labonyapublicschool?igsh=ZncxZW15bzZydHho">
              <FaInstagram />
            </a>
            {/* <a href="#">
              <FaLinkedinIn />
            </a> */}
            <a href="https://youtube.com/@labonyapublicschool?si=8u7GtGIt6wW7SG-H">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} LPS. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
