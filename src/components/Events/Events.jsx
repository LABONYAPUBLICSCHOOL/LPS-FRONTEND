import React from "react";
import "./Events.css";
import Contact from "../../components/ContactPage/ContactPage";
import { Link } from "react-router-dom";

const schoolEvents = [
 
  {
    id: 1,
    img: "https://cdn0.weddingwire.in/vendor/4887/3_2/960/jpg/944974-903726246393198-3910239754055926696-n_15_44887.jpeg", 
    title: "Lakshya",
    link: "/gallery/lakshya",
  },
   {
    id: 2,
    img: "https://cdn0.weddingwire.in/vendor/4887/3_2/960/jpg/944974-903726246393198-3910239754055926696-n_15_44887.jpeg", 
    title: "Christmas 2025",
    link: "/gallery/christmas-2025",
  },

];

function Events() {
  return (
    <div className="event-page">
      {/* Main Heading */}
      <header className="event-header main">
        <h1>School Events</h1>
        <p>Memorable celebrations and highlights from our school life.</p>
      </header>

      {/* Events Gallery */}
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