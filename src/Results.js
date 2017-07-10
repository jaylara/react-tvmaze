import React, { Component } from "react"

class Results extends Component {
  render() {
    const results = this.props.shows.map((show, i) => {
      return (
        <div>
          <img src={show.image} />
          <p>{show.name}</p>
        </div>
      )
    })
    return <div>{results}</div>
  }
}

export default Results
