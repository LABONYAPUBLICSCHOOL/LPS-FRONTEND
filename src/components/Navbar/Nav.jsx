import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Nav.css";
import LPS from '../../assets/lps.png'

function Nav() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo">
          <img src={LPS} alt="School Logo" />
        </div>

        {/* Desktop Menu */}
        <ul className={`nav-links ${open ? "active" : ""}`}>
          <li><a href="#about">About Us</a></li>
          <li><a href="#why">Why LPS?</a></li>
          <li><a href="#cambridge">Cambridge Wing</a></li>
          <li><a href="#admissions">Admissions</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>

        {/* Hamburger Icon */}
        <div className="nav-toggle" onClick={toggleMenu}>
          {open ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
