import React from "react";
import "./TopNav.css";
import { MdPhone, MdEmail } from "react-icons/md";
import { FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp } from "react-icons/fa";

const TopNav = () => {
  return (
    <div className="topnav">
      <div className="topnav-left">
        <div className="contact-item">
          <span className="text">+91 1234567890</span>
        </div>
        <div className="contact-item">
     
          <span className="text">info@example.com</span>
        </div>
      </div>
      <div className="topnav-right">
        <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
        <a href="https://youtube.com" target="_blank" rel="noreferrer"><FaYoutube /></a>
        <a href="https://wa.me/911234567890" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
      </div>
    </div>
  );
};

export default TopNav;
