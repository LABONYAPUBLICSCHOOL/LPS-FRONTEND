import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Nav.css";
import LPS from "../../assets/lps.png";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ ADDED: lock body scroll when mobile menu open (NO UI CHANGE)
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) setOpenDropdown(null);
  };

  const toggleDropdown = (key) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setOpenDropdown(null);
  };

  const menuItems = [
    { label: "Home", to: "/" },
    {
      label: "About Us",
      key: "about",
      subItems: [
        { label: "Vision & Mission", to: "/vision-mission" },
        { label: "Principal's Message", to: "/principal-msg" },
        { label: "Our Team", to: "/ourteam" },
      ],
    },
    {
      label: "Why LPS?",
      key: "why",
      subItems: [
        { label: "Curriculum", to: "/curriculum" },
        { label: "Sports", to: "/sports" },
        { label: "Career Guidance", to: "/career" },
        { label: "Mental Wellbeing", to: "/mental" },
        { label: "Our Campus", to: "/our-campus" },
      ],
    },
    { label: "LPS Wing", to: "/lps-wing" },
    {
      label: "Events",
      key: "events",
      subItems: [{ label: "School Events", to: "/events" }],
    },
    {
      label: "Contact Us",
      key: "contact",
      subItems: [
        { label: "Contact Info", to: "/contact-info" },
        {
          label: "How to Reach",
          href: "https://maps.app.goo.gl/X8QsbfwgQN5ha5xJ9",
          external: true,
        },
        { label: "Work with Us", to: "/workwithus" },
      ],
    },
  ];

  return (
    <nav className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/" onClick={closeMenu}>
            <img src={LPS} alt="LPS Logo" className="logo-img" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="nav-menu desktop-menu">
          {menuItems.map((item) => (
            <li key={item.label} className="nav-item">
              {item.subItems ? (
                <div className="dropdown">
                  <button className="dropbtn">
                    {item.label}
                    <FaChevronDown className="chevron" />
                  </button>
                  <ul className="dropdown-content">
                    {item.subItems.map((sub) => (
                      <li key={sub.label}>
                        {sub.external ? (
                          <a
                            href={sub.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {sub.label}
                          </a>
                        ) : (
                          <Link to={sub.to} onClick={closeMenu}>
                            {sub.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <Link to={item.to} onClick={closeMenu}>
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <div className="mobile-toggle" onClick={toggleMobileMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Mobile Menu */}
        <ul className={`nav-menu mobile-menu ${isOpen ? "active" : ""}`}>
          {menuItems.map((item) => (
            <li key={item.label} className="mobile-nav-item">
              {item.subItems ? (
                <div
                  className={`mobile-dropdown ${
                    openDropdown === item.key ? "open" : ""
                  }`}
                  onClick={() => toggleDropdown(item.key)}
                >
                  <span className="mobile-dropbtn">
                    {item.label}
                    <FaChevronDown
                      className={`mobile-chevron ${
                        openDropdown === item.key ? "rotated" : ""
                      }`}
                    />
                  </span>
                  <ul className="mobile-dropdown-content">
                    {item.subItems.map((sub) => (
                      <li key={sub.label}>
                        {sub.external ? (
                          <a
                            href={sub.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={closeMenu}
                          >
                            {sub.label}
                          </a>
                        ) : (
                          <Link to={sub.to} onClick={closeMenu}>
                            {sub.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <Link to={item.to} onClick={closeMenu}>
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
