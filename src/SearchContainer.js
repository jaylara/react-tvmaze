import React, { Component } from 'react';

import Search from './Search';
import Results from './Results';


const results = [
  {
    "name":"The Office",
    "image":"http://static.tvmaze.com/uploads/images/medium_portrait/85/213184.jpg"
  },
  {
    "name":"Radiant Office",
    "image":"http://static.tvmaze.com/uploads/images/medium_portrait/101/254702.jpg"
  },
  {
    "name":"The Office",
    "image":"http://static.tvmaze.com/uploads/images/medium_portrait/93/234802.jpg"
  },
  {
    "name":"Mr. Box Office",
    "image":"http://static.tvmaze.com/uploads/images/medium_portrait/97/244942.jpg"
  },
  {
    "name":"The Queen of Office",
    "image":"http://static.tvmaze.com/uploads/images/medium_portrait/58/146476.jpg"
  },
  {
    "name":"No Offence",
    "image":"http://static.tvmaze.com/uploads/images/medium_portrait/48/121682.jpg"
  },
  {
    "name":"Oficer",
    "image":"http://static.tvmaze.com/uploads/images/medium_portrait/29/73047.jpg"
  },
  {
    "name":"Trzeci oficer",
    "image":"http://static.tvmaze.com/uploads/images/medium_portrait/29/73053.jpg"
  },
  {
    "name":"Line Offline: Salaryman",
    "image":"http://static.tvmaze.com/uploads/images/medium_portrait/57/143508.jpg"
  },
  {
    "name":"Utenai Keikan",
    "image":"http://static.tvmaze.com/uploads/images/medium_portrait/42/106093.jpg"
  }
];


function DisplaySearchOrResults(props) {
  const hasSearched = props.hasSearched;
  return hasSearched ? (<Results shows={props.shows} />):(<Search />);
}

class SeachContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      shows: results,
      query: "",
      hasSearched: false
    };

    this.handleSearchInput = (e) => {
      this.setState({query: e.target.value});
      console.log(this.state.query)
    } // end of handleSearchInput()

    this.onSubmitQuery = (e) => {
      e.preventDefault();
      this.setState({hasSearched: true});
    } // end of onSubmitQuery())

    this.onSubmitResetSearch = (e) => {
      e.preventDefault();
      this.setState({hasSearched: false});
    } // end of onSubmitResetSearch())

  } // end of SearchContainer constructor


  render() {
    const toRender = this.state.hasSearched
            ? <Results shows={this.state.shows} onSubmitResetSearch={this.onSubmitResetSearch} />
            : <Search query={this.state.query}
                      handleSearchInoput={this.handleSearchInoput}
                      onSubmitQuery={this.onSubmitQuery} />
    return (<div>{toRender}</div>);
  }
}


export default SeachContainer;
