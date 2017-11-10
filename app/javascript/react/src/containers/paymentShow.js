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
          <p className="checkout-page-text">I'm double checking to make sure everything is sanitized. ETA Early Sunday Morning<br />Everything will be hooked back up!w</p>
        </div>
      </div>
    )
  }
}

export default PaymentShow
