import React, { Component } from 'react';

import './SearchResult.css';

class SearchResult extends Component {
  render() {
    return (
      <div className="SearchResult">
        <h3>{this.props.title}</h3>
        <p>{this.props.body}</p>
      </div>
    );
  }
}

SearchResult.propTypes = {
  title: React.PropTypes.string.isRequired,
  body: React.PropTypes.string.isRequired
}

export default SearchResult;