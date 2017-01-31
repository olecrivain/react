import React, { Component, PropTypes } from 'react'

class Produit extends Component {

  static propTypes = {
    titre: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  };    

  render() {
    const { titre, description } = this.props
    return (
      <div>
        <h3>{titre}</h3>
        <div>{description}</div>
      </div>
    )
  }
}

export default Produit