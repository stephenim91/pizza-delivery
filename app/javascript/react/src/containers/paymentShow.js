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
          <h3 className="checkout-page-text header">Your order has been processed!</h3>
          <p className="checkout-page-text">Your order should be here by 5:58pm</p>
        </div>
      </div>
    )
  }
}

export default PaymentShow
