import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import CheckoutTile from '../components/checkoutTile'
import ErrorTile from '../components/errorTile'
import Modal from 'react-modal';



const modalParameters = {
  content : {
    top: '40%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  }
};

class CheckoutShow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [{id: 'we45#*32lk2EFEn3q', instruction: '', name: 'we45#*32lk2EFEn3q', price: 1, quantity: 1, ordered: false, restaurant: '', itemApi: ''}],
      address: '',
      latitude: '',
      longitude: '',
      comments: '',
      email: '',
      phone: '',
      username: '',
      guestName: '',
      guestEmail: '',
      guestPhone: '',
      guestInfoSubmitError: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleModal = this.handleModal.bind(this)
    this.handleGuestName = this.handleGuestName.bind(this)
    this.handleGuestEmail = this.handleGuestEmail.bind(this)
    this.handleGuestPhone = this.handleGuestPhone.bind(this)
  }

  componentDidMount() {
    fetch(`/api/v1/orders.json`,
      {credentials: "same-origin",
      headers: {"Content-Type": "application/json"}})
      .then(response => response.json())
      .then(body => {
        this.setState({ username: body.username, email: body.email, phone: body.phone, address: body.address, latitude: body.latitude, longitude: body.longitude, orders: body.orders })
      })
  }

  handleSubmit(event) {
    fetch(`/api/v1/processings.json`, {
      method: "POST",
      body: JSON.stringify({
        "restaurant_api_key": this.state.orders[0].restaurant,
        "items": this.state.orders,
        "comments": this.state.comments,
        "address": this.state.address,
        "latitude": this.state.latitude,
        "longitude": this.state.longitude,
        "email": this.state.email,
        "phone": this.state.phone,
        "username": this.state.username
      }),
      credentials: "same-origin",
      headers: {"Content-Type": "application/json"}})
      .then(response => response.json())
      .then(body => {
        if(body.error) {
          alert(`Sorry. Your order could not be processed. ${body.details}`)
        }
      })
  }

  handleModal(event) {
    event.preventDefault();
    if(this.state.guestName == '' || this.state.guestEmail == '' || this.state.guestPhone == '') {
      this.setState({ guestInfoSubmitError: "Please complete all fields"})
    } else {
      this.setState({ username: this.state.guestName, email: this.state.guestEmail, phone: this.state.guestPhone})
    }
  }

  handleGuestName(event) {
    this.setState({ guestName: event.target.value })
  }
  handleGuestEmail(event) {
    this.setState({ guestEmail: event.target.value })
  }
  handleGuestPhone(event) {
    this.setState({ guestPhone: event.target.value })
  }

  render() {
    let isOpen = false
    if(this.state.username == "guest5%4232#1*53ng#D") {
      isOpen = true
    }
    let error = 'There are no items in your cart.'
    let sum = 0.0
    let total = this.state.orders.forEach(order => {
      sum = sum + (order.quantity * order.price)
    })
    sum = sum.toFixed(2)
    let orders = []
    if (this.state.orders.length == 1 && this.state.orders[0].id == "we45#*32lk2EFEn3q") {
      return(
        <div>
        <div className="index-page-nav-bar-buffer"></div>
        <ErrorTile name="There are no items in your cart." />
        </div>
      )
    } else {
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
    }

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

      <Modal isOpen={isOpen} style={modalParameters}>
        <div className="new-review-modal">
        <h4 className="show-page-header">Enter Your Contact Information</h4>
        <p className="show-page-warning-text">{this.state.guestInfoSubmitError}</p>
          <label>
            Name:
            <input onChange={this.handleGuestName} className="new-review-text-area" type="text" />
          </label>
          <label>
            Email:
            <input onChange={this.handleGuestEmail} className="new-review-text-area" type="text" />
          </label>
          <label>
            Phone:
            <input onChange={this.handleGuestPhone} className="new-review-text-area" type="text" />
          </label>
          <button className="button checkout-page new-review" type="submit" onClick={this.handleModal}>Submit</button>
      </div>
      </Modal>

      </div>
    )
  }
}

export default CheckoutShow
