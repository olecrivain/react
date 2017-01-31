const produits = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PRODUIT':
      return [
        ...state,
        {
          titre: action.titre,
          description: action.description
        }
      ]
    default:
      return state
  }
}

export default produits