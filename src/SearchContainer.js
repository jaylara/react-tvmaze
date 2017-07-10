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
      : <Search query={this.state.query} onSubmitQuery={this.onSubmitQuery} />
    return <div>{toRender}</div>
  }
}

export default SearchContainer
