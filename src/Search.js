import React, { Component } from "react"

class Search extends Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmitQuery}>
        <input
          type="text"
          placeholder="Enter search term"
          onChange={this.props.handleSearchInput}
        />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default Search
