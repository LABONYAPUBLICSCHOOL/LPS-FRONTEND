import React from "react";
import "./Events.css";  // Your existing styles
import Contact from "../ContactPage/ContactPage";
import { Link } from "react-router-dom";

const schoolEvents = [
  {
    id: 1,
    img: "/Christmas/8.jpeg",  // Your best Christmas cover photo
    title: "Christmas 2025",
    link: "/gallery/christmas-2025",
  },
  {
    id: 2,
    img: "/Lakshya/1000028122.JPG",  // Your best Lakshya cover photo
    title: "Laksh 2024",
    link: "/gallery/laksh",
  },
];

function Events() {
  return (
    <div className="event-page">
      <header className="event-header main">
        <h1>School Events</h1>
        <p>Memorable celebrations and highlights from our school life.</p>
      </header>

      <div className="event-gallery">
        {schoolEvents.map((event) => (
          <Link key={event.id} to={event.link} className="event-card-link">
            <div className="event-card">
              <img src={event.img} alt={event.title} />
              <div className="title-caption">
                <h3>{event.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <Contact />
    </div>
  );
}

export default Events;