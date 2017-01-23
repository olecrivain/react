import React, { Component } from 'react';
import SearchResultFilteredList from './search/SearchResultFilteredList.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchResultFilteredList />
      </div>
    );
  }
}

export default App;
