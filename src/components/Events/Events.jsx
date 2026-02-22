import React from "react";
import "./Events.css";  
import { Link } from "react-router-dom";

const schoolEvents = [
  {
    id: 1,
    img: "/Lakshya/1000028122.JPG",  
    title: "Laksh 2024",
    link: "/gallery/laksh",
  },
  {
    id: 2,
    img: "/Christmas/8.jpeg", 
    title: "Christmas 2025",
    link: "/gallery/christmas-2025",
  },
   {
    id: 3,
    img: "/Republic/1.jpg", 
    title: "Republic Day 2026",
    link: "/gallery/republic",
  },
   {
    id: 4,
    img: "/Farewell/1.jpg",  
    title: "Farewell 2025 Batch",
    link: "/gallery/farewell",
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

      
    </div>
  );
}

export default Events;