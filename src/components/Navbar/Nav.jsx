import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";   // ✅ Import Link
import "./Nav.css";
import LPS from '../../assets/lps.png';

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
          <Link to="/">
            <img src={LPS} alt="School Logo" />
          </Link>
        </div>

        <ul className={`nav-links ${open ? "active" : ""}`}>
          <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setOpen(false)}>About Us</Link></li>
          <li><Link to="/why" onClick={() => setOpen(false)}>Why LPS?</Link></li>
          <li><Link to="/cambridge" onClick={() => setOpen(false)}>Cambridge Wing</Link></li>
          <li><Link to="/admissions" onClick={() => setOpen(false)}>Admissions</Link></li>
          <li><Link to="/contact" onClick={() => setOpen(false)}>Contact Us</Link></li>
        </ul>

        
        <div className="nav-toggle" onClick={toggleMenu}>
          {open ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
