import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Nav.css";
import LPS from "../../assets/lps.png";

function Nav() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setOpen(!open);
    setActiveDropdown(null); // close dropdowns when toggling
  };

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  // Close menu when clicking outside (for mobile)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (open && !event.target.closest(".nav-container")) {
        setOpen(false);
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo">
          <Link to="/" onClick={() => setOpen(false)}>
            <img src={LPS} alt="School Logo" />
          </Link>
        </div>

        <ul className={`nav-links ${open ? "active" : ""}`}>
          <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>

          {/* About Us Dropdown */}
          <li className={`dropdown ${activeDropdown === "about" ? "open" : ""}`}>
            <span onClick={() => toggleDropdown("about")}>
              About Us {activeDropdown === "about" ? <FaChevronUp className="dropdown-icon" /> : <FaChevronDown className="dropdown-icon" />}
            </span>
            <ul className="dropdown-menu">
              <li><Link to="/vision-mission" onClick={() => setOpen(false)}>Vision & Mission</Link></li>
              <li><Link to="/principal-msg" onClick={() => setOpen(false)}> Principal's Message</Link></li>
              <li><Link to="/bod" onClick={() => setOpen(false)}>Board of Directors</Link></li>
              <li><Link to="/ourteam" onClick={() => setOpen(false)}>Our Team</Link></li>
              <li><Link to="/batch-photos" onClick={() => setOpen(false)}>SCIS Batch Photographs</Link></li>
            </ul>
          </li>

          {/* Why LPS Dropdown */}
          <li className={`dropdown ${activeDropdown === "why" ? "open" : ""}`}>
            <span onClick={() => toggleDropdown("why")}>
              Why LPS? {activeDropdown === "why" ? <FaChevronUp className="dropdown-icon" /> : <FaChevronDown className="dropdown-icon" />}
            </span>
            <ul className="dropdown-menu">
              <li><Link to="/curriculum" onClick={() => setOpen(false)}>Curriculum</Link></li>
              <li><Link to="/co-curricular" onClick={() => setOpen(false)}>Co-Curricular</Link></li>
              <li><Link to="/sports" onClick={() => setOpen(false)}>Sports</Link></li>
              <li><Link to="/career" onClick={() => setOpen(false)}>Career Guidance & Counselling</Link></li>
              <li><Link to="/mental" onClick={() => setOpen(false)}>Mental Wellbeing Support</Link></li>
              <li><Link to="/our-campus" onClick={() => setOpen(false)}>Our Campus</Link></li>
              <li><Link to="/scouting" onClick={() => setOpen(false)}>Scouting</Link></li>
            </ul>
          </li>

          <li><Link to="/lps-wing" onClick={() => setOpen(false)}>LPS Wing</Link></li>

          {/* Events Dropdown */}
          <li className={`dropdown ${activeDropdown === "events" ? "open" : ""}`}>
            <span onClick={() => toggleDropdown("events")}>
              Events {activeDropdown === "events" ? <FaChevronUp className="dropdown-icon" /> : <FaChevronDown className="dropdown-icon" />}
            </span>
            <ul className="dropdown-menu">
              <li><Link to="/events" onClick={() => setOpen(false)}>School Events</Link></li>
              <li><Link to="/testimonials" onClick={() => setOpen(false)}>Testimonials</Link></li>
            </ul>
          </li>

          {/* Contact Dropdown */}
          <li className={`dropdown ${activeDropdown === "contact" ? "open" : ""}`}>
            <span onClick={() => toggleDropdown("contact")}>
              Contact Us {activeDropdown === "contact" ? <FaChevronUp className="dropdown-icon" /> : <FaChevronDown className="dropdown-icon" />}
            </span>
            <ul className="dropdown-menu">
              <li><Link to="/contact-info" onClick={() => setOpen(false)}>Contact Information</Link></li>
              <li><Link to="https://maps.app.goo.gl/X8QsbfwgQN5ha5xJ9" onClick={() => setOpen(false)}>How to Reach</Link></li>
              <li><Link to="/workwithus" onClick={() => setOpen(false)}>Work with Us</Link></li>
            </ul>
          </li>
        </ul>

        <div className="nav-toggle" onClick={toggleMenu}>
          {open ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
}

export default Nav;