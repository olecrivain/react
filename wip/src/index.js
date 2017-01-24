import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router'
import { browserHistory } from 'react-router'

import App from './App.js';
import SearchFilteredResultList from './search/SearchFilteredResultList.js';
import Voyage from './voyage/Voyage.js';

import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="results" component={SearchFilteredResultList}/>
      <Route path="voyages/:id" component={Voyage}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
