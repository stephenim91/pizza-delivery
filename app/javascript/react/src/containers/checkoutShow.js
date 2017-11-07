import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


class RestaurantsIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      longform_address: '',
      latitude: '',
      longitude: '',
      restaurants: [{logoUrl: '', name: '', apiKey: ''}]
    }
  }

  componentDidMount() {
  }




  render() {
    return(
      <div>

        <p>checkout</p>
        <p>1 Potato, Bacon, Green Onion and Ranch Pizza </p>
        <p>to 41 Mt Vernon St, Cambridge, MA, USA</p>
        <div className="button" type="submit">Place Order</div>
      </div>
    )
  }
}

export default RestaurantsIndex
