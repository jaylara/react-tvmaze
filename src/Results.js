import React, { Component } from "react"
import "./Results.css"

class Results extends Component {
  render() {
    const results = this.props.shows.map((show, i) => {
      return (
        <div className="Results_item" key={i}>
          <img
            src={show.image}
            className="Results_item_image"
            alt={show.name}
          />
          <p className="Results_item_title">{show.name}</p>
        </div>
      )
    })
    return <div className="Results">{results}</div>
  }
}

export default Results
