import React from "react";
import "./TopNav.css";
import { MdPhone, MdEmail } from "react-icons/md";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

const TopNav = () => {
  return (
    <div className="topnav">
      <div className="topnav-left">
        <div className="contact-item">
          <span className="text">+91 7439893586</span>
        </div>
        <div className="contact-item">
          <span className="text">labonyapublicschool98@gmail.com</span>
        </div>
      </div>
      <div className="topnav-right">
        <a
          href="https://www.instagram.com/labonyapublicschool?igsh=ZncxZW15bzZydHho"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/share/1BRGBk3yGe/"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://youtube.com/@labonyapublicschool?si=8u7GtGIt6wW7SG-H"
          target="_blank"
          rel="noreferrer"
        >
          <FaYoutube />
        </a>
        <a href="https://wa.me/917439893586" target="_blank" rel="noreferrer">
          <FaWhatsapp />
        </a>
      </div>
    </div>
  );
};

export default TopNav;
