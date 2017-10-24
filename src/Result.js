import React, { Component } from 'react';

class Result extends Component {
  render() {
    return (
      <div className="result-item">
        <img src={this.props.src} width="100px" alt={this.props.name}/>
        <span className="result-name">{this.props.name}</span>
      </div>
    );
  }
}

export default Result;
