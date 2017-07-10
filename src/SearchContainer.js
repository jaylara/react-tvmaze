import React, { Component } from "react"
import Search from "./Search"
import Results from "./Results"

class SearchContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shows: props.shows,
      hasSearched: true,
      query: ""
    }
  }
  render() {
    const toRender = this.state.hasSearched
      ? <Results shows={this.state.shows} />
      : <Search query={this.state.query} />
    return <div>{toRender}</div>
  }
}

export default SearchContainer
