import React, { useEffect, useRef } from "react";
import "./SchoolEvent.css";
import { Link } from "react-router-dom";

const events = [
  {
    id: 1,
    title: "Laksh2025",
    img: "/Lakshya/1000028152.JPG",
    // link: "/events/annual-day",
  },
  {
    id: 2,
    title: "Laksh 2025",
    img: "/Lakshya/1000028164.JPG",
    // link: "/events/indian-university-fair",
  },
  {
    id: 3,
    title: "Laksh 2025",
    img: "/Lakshya/1000028158.JPG",
    // link: "/events/prism-2025",
  },
  {
    id: 4,
    title: "Laksh 2025",
    img: "/Lakshya/1000028250.JPG",
    // link: "/events/international-university-fair",
  },
  {
    id: 5,
    title: "Laksh 2025",
    img: "/Lakshya/1000028114.JPG",
    // link: "/events/investiture-ceremony",
  },
  {
    id: 6,
    title: "Laksh2025",
    img: "/Lakshya/1000028140.JPG",
    // link: "/events/sports-meet",
  },
];

function SchoolEvents() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section className="events-section">
      <h2 className="section-title">School Events</h2>
      <div className="events-container">
        {events.map((event, index) => (
          <Link
            to={event.link}
            key={event.id}
            className="event-card fade-up"
            ref={(el) => (cardsRef.current[index] = el)}
          >
            <div className="event-img-wrapper">
              <img src={event.img} alt={event.title} />
              <div className="event-overlay">
                <h3>{event.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="view-more-btn">
        <Link to="/events">VIEW MORE..</Link>
      </div>
    </section>
  );
}

export default SchoolEvents;
