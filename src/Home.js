import React, { Component } from 'react';
import logo from './logo.svg';


import SearchContainer from './SearchContainer';
import './Home.css';


class Home extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>reactTVmaze</h2>
        </div>
        <p className="App-intro">
          <SearchContainer />
        </p>
      </div>
    );
  }
}

export default Home;
