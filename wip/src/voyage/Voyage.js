import React, { Component } from 'react';

class Voyage extends Component {
  render() {
    return (
      <div className="Voyage">
        <div>
          <h3>{this.props.params.id}</h3>
          <div>
            blabla balbla
          </div>
        </div>
      </div>
    );
  }
}

export default Voyage;
