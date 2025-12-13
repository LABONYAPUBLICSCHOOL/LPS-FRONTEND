import React, { useEffect, useRef } from "react";
import "./SchoolEvent.css";
import { Link } from "react-router-dom";
import event from '../../assets/event.jpg'

const events = [
  {
    id: 1,
    title: "Annual Day Celebrations 2025",
    img: event,
    link: "/events/annual-day",
  },
  {
    id: 2,
    title: "Indian University Fair 2025",
    img: event,
    link: "/events/indian-university-fair",
  },
  {
    id: 3,
    title: "Prism 2025 - Primary School Fest",
    img: event,
    link: "/events/prism-2025",
  },
  {
    id: 4,
    title: "International University Fair 2025",
    img: event,
    link: "/events/international-university-fair",
  },
  {
    id: 5,
    title: "Investiture Ceremony 2025",
    img: event,
    link: "/events/investiture-ceremony",
  },
  {
    id: 6,
    title: "Sports Meet 2025",
    img: event,
    link: "/events/sports-meet",
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
