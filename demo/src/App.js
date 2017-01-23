import React, { Component } from 'react';

import SearchResult from './search/SearchResult';

import './App.css';

const results = [
  { title: "Test 1", body: "blabla blabla" },
  { title: "Test 2", body: "blabla blabla" }
];

class App extends Component {
  render() {
    return <div className="App">
      {results.map((result, i) => {
        return <SearchResult key={i} {...result}/>
      })}
    </div>
  }
}

export default App;
