import React, { Component } from "react";

export default class SearchBar extends Component {
  state = {
    searchTerm: ""
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="search-input">Event Search:</label>
          <input
            onChange={this.handleChange}
            id="search-input"
            type="text"
            value={this.state.searchTerm}
          ></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }

  handleChange = event => {
    const input = event.target.value;
    this.setState({ searchTerm: input });
    console.log(this.state.searchTerm);
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.setSearchTerm(this.state.searchTerm);
    this.setState({ searchTerm: "" });
    console.log(this.setState.searchTerm);
  };
}
