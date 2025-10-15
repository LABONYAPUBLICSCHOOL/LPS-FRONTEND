import React from "react";
import "./Events.css";

const sportsEvents = [
  { id: 1, img: "https://images.unsplash.com/photo-1502877338535-766e1452684a", title: "Football Tournament" },
  { id: 2, img: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d", title: "Athletics Meet" },
  { id: 3, img: "https://images.unsplash.com/photo-1546519638-68e109498ffc", title: "Cricket Championship" },
  { id: 4, img: "https://images.unsplash.com/photo-1604654894610-df63bc536371", title: "Basketball League" }
];

const danceEvents = [
  { id: 1, img: "https://images.unsplash.com/photo-1520975918318-5d6a9e8b4b17", title: "Cultural Dance Night" },
  { id: 2, img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91", title: "Solo Dance Competition" },
  { id: 3, img: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb", title: "Group Dance Battle" },
  { id: 4, img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91", title: "Annual Dance Show" }
];

function Events() {
  return (
    <div className="event-page">
      {/* Sports Events Section */}
      <header className="event-header sports">
        <h1>Sports Events</h1>
        <p>Celebrating the spirit of teamwork, competition, and victory.</p>
      </header>
      <div className="event-gallery">
        {sportsEvents.map((event) => (
          <div key={event.id} className="event-card">
            <img src={event.img} alt={event.title} />
            <div className="overlay">
              <h3>{event.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Dance Events Section */}
      <header className="event-header dance">
        <h1>Dance Events</h1>
        <p>Feel the rhythm, embrace the moves, and express your soul.</p>
      </header>
      <div className="event-gallery">
        {danceEvents.map((event) => (
          <div key={event.id} className="event-card">
            <img src={event.img} alt={event.title} />
            <div className="overlay">
              <h3>{event.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
