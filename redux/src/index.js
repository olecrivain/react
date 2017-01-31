import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import ProduitList from './components/ProduitList'
import reducer from './reducers'

const store = createStore(reducer)
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
  <ProduitList
    produits={store.getState()}
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
  />,
  rootEl
)

render()
store.subscribe(render)