import React, { Component } from "react"

class Search extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Enter search term" />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default Search
