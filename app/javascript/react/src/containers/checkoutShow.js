import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import CheckoutTile from '../components/checkoutTile'



class CheckoutShow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [{id: '', instruction: '', name: '', price: 1, quantity: 1, ordered: false, restaurant: ''}],
      address: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    fetch(`/api/v1/orders.json`,
      {credentials: "same-origin",
      headers: {"Content-Type": "application/json"}})
      .then(response => response.json())
      .then(body => {
        this.setState({ address: body.address, orders: body.orders })
      })
  }

  handleSubmit(event) {

  }


  render() {
    let error = 'There are no items in your cart.'
    let sum = 0.0
    let total = this.state.orders.forEach(order => {
      sum = sum + (order.quantity * order.price)
    })
    sum = sum.toFixed(2)


    let orders = this.state.orders.map(order => {
      return(
        <CheckoutTile
        key={order.id}
        id={order.id}
        name={order.name}
        price={order.price}
        quantity={order.quantity}
        instruction={order.instruction}
        restaurant={order.restaurant} />
      )
    })

    let restaurant

    return(
      <div>
        <div className="checkout-page-nav-bar-buffer"></div>
        <div className="checkout-page-panel">
          <h3 className="checkout-page-text header">Checkout</h3>
          <p className="checkout-page-text">Delivery to {this.state.address}</p>
          {orders}
          <p className="checkout-tile">Your total is ${sum}</p>
          <NavLink onClick={this.handleSubmit} className="button checkout-page" type="submit" to='/confirmation'>Order Now!</NavLink>
      </div>
      </div>
    )
  }
}

export default CheckoutShow
