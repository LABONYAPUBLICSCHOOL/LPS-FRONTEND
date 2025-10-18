import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Nav.css";
import LPS from "../../assets/lps.png";

function Nav() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setOpen(!open);
    setActiveDropdown(null);
  };

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (open && !e.target.closest(".nav-container")) {
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
        <div className="nav-logo">
          <Link to="/" onClick={() => setOpen(false)}>
            <img src={LPS} alt="School Logo" />
          </Link>
        </div>

        <ul className={`nav-links ${open ? "active" : ""}`}>
          <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>

          <li className={`dropdown ${activeDropdown === "about" ? "open" : ""}`}>
            <span onClick={() => toggleDropdown("about")}>
              About Us {activeDropdown === "about" ? <FaChevronUp /> : <FaChevronDown />}
            </span>
            <ul className="dropdown-menu">
              <li><Link to="/vision-mission">Vision & Mission</Link></li>
              <li><Link to="/principal-msg">Principal's Message</Link></li>
              <li><Link to="/bod">Board of Directors</Link></li>
              <li><Link to="/ourteam">Our Team</Link></li>
              <li><Link to="/batch-photos">SCIS Batch Photographs</Link></li>
            </ul>
          </li>

          <li className={`dropdown ${activeDropdown === "why" ? "open" : ""}`}>
            <span onClick={() => toggleDropdown("why")}>
              Why LPS? {activeDropdown === "why" ? <FaChevronUp /> : <FaChevronDown />}
            </span>
            <ul className="dropdown-menu">
              <li><Link to="/curriculum">Curriculum</Link></li>
              <li><Link to="/co-curricular">Co-Curricular</Link></li>
              <li><Link to="/sports">Sports</Link></li>
              <li><Link to="/career">Career Guidance</Link></li>
              <li><Link to="/mental">Mental Wellbeing</Link></li>
              <li><Link to="/our-campus">Our Campus</Link></li>
              <li><Link to="/scouting">Scouting</Link></li>
            </ul>
          </li>

          <li><Link to="/lps-wing">LPS Wing</Link></li>

          <li className={`dropdown ${activeDropdown === "events" ? "open" : ""}`}>
            <span onClick={() => toggleDropdown("events")}>
              Events {activeDropdown === "events" ? <FaChevronUp /> : <FaChevronDown />}
            </span>
            <ul className="dropdown-menu">
              <li><Link to="/events">School Events</Link></li>
              <li><Link to="/testimonial">Testimonials</Link></li>
            </ul>
          </li>

          <li className={`dropdown ${activeDropdown === "contact" ? "open" : ""}`}>
            <span onClick={() => toggleDropdown("contact")}>
              Contact Us {activeDropdown === "contact" ? <FaChevronUp /> : <FaChevronDown />}
            </span>
            <ul className="dropdown-menu">
              <li><Link to="/contact-info">Contact Info</Link></li>
              <li><a href="https://maps.app.goo.gl/X8QsbfwgQN5ha5xJ9" target="_blank" rel="noreferrer">How to Reach</a></li>
              <li><Link to="/workwithus">Work with Us</Link></li>
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
