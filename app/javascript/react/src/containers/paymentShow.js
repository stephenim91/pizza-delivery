import React, { Component } from 'react'


class PaymentShow extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
  }




  render() {
    return(
      <div>
        <div className="checkout-page-nav-bar-buffer"></div>
        <div className="checkout-page-panel">
          <h3 className="checkout-page-text header">Your Order Has Been Processed!</h3>
          <p className="checkout-page-text">You should be receiving an email confirmation of your order!</p>
        </div>
      </div>
    )
  }
}

export default PaymentShow
