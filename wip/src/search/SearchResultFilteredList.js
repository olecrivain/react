import React, { Component } from 'react';
import SearchFilter from './SearchFilter.js';
import SearchResultList from './SearchResultList.js';
import { filterResultsByDepart, filterResultsByVoyageType } from './SearchResultService.js';

// TODO: webservice (Axios ou fetch)
const ALL_RESULTS = [
  { title: 'T1', content: 'blabla', depart: 'Paris', type: 'club' },
  { title: 'T2', content: 'blabla', depart: 'Londre', type: 'sejour' },
  { title: 'T3', content: 'blabla', depart: 'Berlin', type: 'sejour' },
  { title: 'T4', content: 'blabla', depart: 'Marseille', type: 'circuit' },
  { title: 'T5', content: 'blabla', depart: 'Lyon', type: 'club' }
];

class SearchResultFilteredList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      voyageTypes: [
        { type: 'club', label: 'Club', checked: false },
        { type: 'sejour', label: 'Séjour', checked: false },
        { type: 'circuit', label: 'Circuit', checked: false },
      ],
      depart: '',
      filteredResults: ALL_RESULTS
    };
    this.changeVoyageTypes = this.changeVoyageTypes.bind(this);
    this.changeDepart = this.changeDepart.bind(this);
  }

  changeDepart(event) {
    this.setState({
      depart: event.target.value,
      filteredResults: filterResultsByDepart(filterResultsByVoyageType(ALL_RESULTS, this.state.voyageTypes), event.target.value)
    })
  }

  changeVoyageTypes(type) {
    return (event) => {
      let voyageType = this.state.voyageTypes.find(voyageType => voyageType.type === type);
      if (voyageType) {
        voyageType.checked = event.target.checked;
      }
      this.setState({
        voyageTypes: this.state.voyageTypes,
        filteredResults: filterResultsByDepart(filterResultsByVoyageType(ALL_RESULTS, this.state.voyageTypes), this.state.depart)
      })
    };
  }

  render() {
    return (
      <div className="SearchResultFilteredList">
        <SearchFilter voyageTypes={this.state.voyageTypes} changeVoyageTypes={this.changeVoyageTypes} depart={this.state.depart} changeDepart={this.changeDepart}/>
        <SearchResultList results={this.state.filteredResults}/>
      </div>
    );
  }
}

export default SearchResultFilteredList;
