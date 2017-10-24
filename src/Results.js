import React, { Component } from 'react';
import Result from './Result';

class Results extends Component {


  render() {
    let results = this.props.shows.map( (result, idx) => (
      <Result src={result.image} name={result.name} key={idx} />
    ));

    return (
      <div>
        <form onSubmit={this.props.onSubmitResetSearch}>
          <input type="submit" value="Return to Search"/>
        </form>
        <div className="results">
          {results}
        </div>
      </div>
    );
  }
}

export default Results;
