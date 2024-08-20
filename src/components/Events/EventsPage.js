// src/pages/EventsPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './EventsPage.css';

const EventsPage = () => {
  const events = [
    { id: 1, title: 'Annual Tech Conference', date: 'March 20, 2024' },
    { id: 2, title: 'AI & Machine Learning Summit', date: 'April 10, 2024' },
    { id: 3, title: 'Cloud Computing Expo', date: 'May 5, 2024' },
    { id: 4, title: 'Cybersecurity Forum', date: 'June 15, 2024' },
    { id: 5, title: 'Data Science Workshop', date: 'July 25, 2024' },
  ];

  return (
    <div className="events-page">
      <h1>Upcoming Events</h1>
      <div className="events-grid">
        {events.map(event => (
          <Link to={`/events/${event.id}`} key={event.id} className="event-box">
            <h2>{event.title}</h2>
            <p>{event.date}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
