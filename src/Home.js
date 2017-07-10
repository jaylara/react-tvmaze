import React, { Component } from "react"
import Search from "./Search"
import Results from "./Results"
import "./Home.css"

class Home extends Component {
  render() {
    const toRender = this.props.hasSearched
      ? <Results shows={this.props.shows} />
      : <Search />
    return (
      <div>
        <h1>React TVMaze</h1>
        {toRender}
      </div>
    )
  }
}

export default Home
