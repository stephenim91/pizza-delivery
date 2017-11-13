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
          <h3 className="checkout-page-text header">Payment Fetch has been disconnected!</h3>
          <p className="checkout-page-text">While I'm making sure everything is correctly sanitized. Should be back by early morning Monday.</p>
        </div>
      </div>
    )
  }
}

export default PaymentShow
