import React, { Component } from 'react'


class CheckoutShow extends Component {
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

        <p>checkout</p>
        <p>1 Potato, Bacon, Green Onion and Ranch Pizza </p>
        <p>to 41 Mt Vernon St, Cambridge, MA, USA</p>
        <div className="button" type="submit">Place Order</div>
      </div>
    )
  }
}

export default CheckoutShow
