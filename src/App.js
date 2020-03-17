import React from "react";
import "./App.css";
import Title from "./components/Title";
import Search from "./components/Search";
import EventList from "../src/components/EventList";
import Chart from "../src/components/Chart";

function App() {
  return (
    <div className="wrapper">
      <Chart />
      <Title />
      <Search />
      <EventList />
    </div>
  );
}

export default App;
