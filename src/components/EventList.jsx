import React, { Component } from "react";
import EventCard from "./EventCard";
import * as api from "../api";

class EventList extends Component {
  state = {
    events: [],
    isLoading: true
  };

  componentDidMount() {
    api.fetchDefaultData().then(({ _embedded: { events } }) => {
      this.setState({ events, isLoading: false });
    });
  }

  componentDidUpdate(prevProps) {
    console.dir(prevProps);
    if (prevProps.searchTerm !== this.props.searchTerm) {
      api
        .fetchDefaultData(this.props.searchTerm)
        .then(({ _embedded: { events } }) => {
          console.log(events);
          this.setState({ events, isLoading: false });
        });
    }
  }

  render() {
    if (this.state.isLoading)
      return (
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      );

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
