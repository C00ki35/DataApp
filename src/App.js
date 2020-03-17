import React from "react";
import "./App.css";
import Title from "./components/Title";

import EventList from "../src/components/EventList";
import Chart from "../src/components/Chart";
import Search from "../src/components/Search";

class App extends React.Component {
  state = {
    searchTerm: ""
  };

  render() {
    return (
      <div className="wrapper">
        <Title />
        <Search setSearchTerm={this.setSearchTerm} />

        <EventList searchTerm={this.state.searchTerm} />
        <Chart />
      </div>
    );
  }
  setSearchTerm = searchTerm => {
    this.setState({ searchTerm }, () => {});
  };
}

export default App;
