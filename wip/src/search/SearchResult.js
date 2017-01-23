import React, { Component } from 'react';
import './SearchResult.css';

class SearchResult extends Component {
  render() {
    return (
      <div className="SearchResult">
        <h3>{this.props.title}</h3>
        <div>{this.props.content}</div>
        <div>{this.props.depart}</div>
      </div>
    );
  }
}

export default SearchResult;
