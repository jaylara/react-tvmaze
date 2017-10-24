import React, { Component } from 'react';


class Search extends Component {
  render() {

    return (
      <form onSubmit={this.props.onSubmitQuery}>
        <input type="text" onChange={this.props.handleSearchInput} placeholder="Enter Search Term"/>

        <input type="submit" value="Search"/>
      </form>
    ); //end of return
  } //end of render()

} // end of Search class

export default Search;
