import React, { Component } from 'react'
import RestaurantShowSubmenu from './restaurantShowSubmenu'
// import $ from 'jquery'




class RestaurantShow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menu: [{key: 'static', name: '', items: [{name: '', description: '', apiKey: ''}]}],
      taxRate: '',
      hours: '',
      deliveryPrice: '',
      deliveryMin: '',
      logoUrl: '',
      restaurantName: '',
      restaurantApiKey: ''
    }
  }

  componentDidMount() {
    let token = process.env.REACT_APP_EAT_STREET_TOKEN
    let restaurantId = this.props.match.params.id
    fetch(`https://api.eatstreet.com/publicapi/v1/restaurant/${restaurantId}/menu?includeCustomizations=false&access-token=${token}`)
    .then(response => response.json())
    .then(body => {
      let menu = body
      this.setState({ menu: menu })
    })
    fetch(`https://api.eatstreet.com/publicapi/v1/restaurant/${restaurantId}/?&access-token=${token}`)
    .then(response => response.json())
    .then(body => {
      let restaurant = body.restaurant
      this.setState({ taxRate: restaurant.taxRate, hours: restaurant.hours, deliveryPrice: restaurant.deliveryPrice, deliveryMin: restaurant.deliveryMin, logoUrl: restaurant.logoUrl, restaurantApiKey: restaurant.apiKey, restaurantName: restaurant.name })
    })
  }

  render() {
    let products = this.state.menu.map(submenu => {
      return(
        <RestaurantShowSubmenu
          key={submenu.apiKey}
          name={submenu.name}
          items={submenu.items}
          restaurantApiKey={this.state.restaurantApiKey} />
      )
    })

    let deliveryFee = this.state.deliveryPrice
    if (deliveryFee == undefined) {
      deliveryFee = 'Free'
    } else {
      deliveryFee = `Fee. $${deliveryFee}`
    }

    let deliveryMin = this.state.deliveryMin
    if (deliveryMin == '') {
      deliveryMin = 'No Minimum'
    } else {
      deliveryMin = `Min. $${deliveryMin}`
    }

    return(
      <div>
        <div className="show-page-nav-bar-buffer"></div>
        <div className="row">
          <div className="small-5 column">
            <div className="row">
              <h3 className="show-page-header">{this.state.restaurantName}</h3>
            </div>
            <div className="row">
              <div className="small-6 column">
                <img src={this.state.logoUrl}></img>
              </div>
              <div className="small-6 column">
                <p>Delivery {deliveryFee} | {deliveryMin}</p>
              </div>
            </div>
            Restaurant description<br/>Restaurant Reviews and ratings<br />popout form to add rating
          </div>
          <div className="show-page menu-section small-6 column">
            <h3 className="show-page-header">Menu</h3>
            {products}
          </div>
        </div>
      </div>
    )
  }
}

export default RestaurantShow
