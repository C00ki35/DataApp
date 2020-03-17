import React from "react";
import "../App.css";
const EventCard = event => {
  // console.log(event);
  const startDate = new Date(event.dates.start.dateTime);
  return (
    <div>
      <h2>{event.name}</h2>
      <p>{event._embedded.venues[0].name}</p>
      <p>
        <img
          className="event-image"
          src={event.images[0].url}
          alt={event.name}
        />
      </p>
      <p>{startDate.toUTCString()}</p>
    </div>
  );
};

export default EventCard;
