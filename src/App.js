import React from "react";
import "./App.css";
import Title from "./components/Title";

import EventList from "../src/components/EventList";
import Chart from "../src/components/Chart";
import SearchBar from "../src/components/SearchBar";

class App extends React.Component {
  state = {
    searchTerm: ""
  };

  render() {
    return (
      <div className="wrapper">
        <Search setSearchTerm={this.setSearchTerm} />
        <Chart />
        <Title />
        <EventList searchTerm={this.state.searchTerm} />
      </div>
    );
  }
  setSearchTerm = searchTerm => {
    console.log(searchTerm);
    this.setState({ searchTerm });
    console.log("STATTE" + this.state.searchTerm);
  };
}

export default App;
