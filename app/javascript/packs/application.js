import React from 'react'
import ReactDOM from 'react-dom'
import PizzaDelivery from '../react/src/pizzaDelivery'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <PizzaDelivery />,
    document.body.appendChild(document.createElement('div')),
  )
})
