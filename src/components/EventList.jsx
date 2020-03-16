import React, { Component } from "react";
import EventCard from "./EventCard";
import * as api from "../api";

class EventList extends Component {
  state = {
    events: []
  };

  componentDidMount() {
    api.fetchDefaultData().then(({ _embedded: { events } }) => {
      this.setState({ events });
    });
  }

  render() {
    return (
      <main>
        {this.state.events.map(event => {
          return <EventCard key={event.id} {...event} />;
        })}
      </main>
    );
  }
}

export default EventList;
