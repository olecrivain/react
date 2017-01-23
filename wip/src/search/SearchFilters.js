import React, { Component } from 'react';
import './SearchFilters.css';

class SearchFilters extends Component {
  render() {
    let voyageTypes = this.props.voyageTypes;
    return (
      <div className="SearchFilters left">
        <div>
          <h3>Type de voyage</h3>
          <div>
            {voyageTypes.map(voyageType => {
              return (
                <label key={voyageType.type}>
                  <input type="checkbox" checked={voyageType.checked} onChange={this.props.changeVoyageTypes(voyageType.type)}/>
                  {voyageType.label}
                </label>
              );
            })}
          </div>
          <h3>Départ</h3>
          <div>
            <label>
              Départ:
              <input type="text" value={this.props.depart} onChange={this.props.changeDepart} />
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchFilters;
