import React, { Component } from "react"
import Search from "./Search"
import Results from "./Results"

class SearchContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shows: props.shows,
      hasSearched: false,
      query: ""
    }
    this.onSubmitQuery = this.onSubmitQuery.bind(this)
    this.handleSearchInput = this.handleSearchInput.bind(this)
  }

  handleSearchInput(e) {
    this.setState({
      query: e.target.value
    })
  }

  onSubmitQuery(e) {
    e.preventDefault()
    this.setState({
      hasSearched: true
    })
  }

  render() {
    const toRender = this.state.hasSearched
      ? <Results shows={this.state.shows} />
      : <Search
          query={this.state.query}
          handleSearchInput={this.handleSearchInput}
          onSubmitQuery={this.onSubmitQuery}
        />
    return <div>{toRender}</div>
  }
}

export default SearchContainer
