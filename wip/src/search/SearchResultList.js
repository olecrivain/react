import React, { Component } from 'react';
import SearchResult from './SearchResult.js';

class SearchResultList extends Component {
  render() {
    return (
      <div className="SearchResultList right">
        {this.props.results.map((result, i) => {
          return <SearchResult key={i} {...result}/>;
        })}
      </div>
    );
  }
}

export default SearchResultList;
