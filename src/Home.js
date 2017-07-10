import React, { Component } from "react"
import SearchContainer from "./SearchContainer"
import "./Home.css"

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1>React TVMaze</h1>
        <SearchContainer shows={this.props.shows} />
      </div>
    )
  }
}

export default Home
