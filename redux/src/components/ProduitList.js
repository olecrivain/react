import React, { Component } from 'react'
import Produit from './Produit'

class ProduitList extends Component {
  render() {
    const { produits } = this.props
    return (
      <div>
        <h2>Les produits</h2>
        {produits.map((produit, i) =>
            <Produit key={i} {...produit} />
        )}
      </div>
    )
  }
}

export default ProduitList