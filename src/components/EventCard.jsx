import React from "react";
import "../App.css";
const EventCard = event => {
  console.log(event);
  return (
    <div>
      <h2>{event.name}</h2>
      <p>{event._embedded.venues[0].name}</p>
      <p>
        <img src={event.images[0].url} alt={event.name} />
      </p>
    </div>
  );
};

export default EventCard;
