import React, { Component } from 'react';
import { Link } from 'react-router'
import './SearchResult.css';

class SearchResult extends Component {
  render() {
    return (
      <div className="SearchResult">
        <h3>
          <Link to={'/voyages/' + this.props.title}>{this.props.title}</Link>
        </h3>
        <div>{this.props.content}</div>
        <div>{this.props.depart} / {this.props.type}</div>
      </div>
    );
  }
}

SearchResult.propTypes = {
  title: React.PropTypes.string.isRequired,
  content: React.PropTypes.string.isRequired
}

export default SearchResult;
