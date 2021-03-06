import React, { Component } from 'react'
import RestaurantTile from '../components/restaurantTile'
import ErrorTile from '../components/errorTile'
import { BrowserRouter, Route, Switch } from 'react-router-dom'



class RestaurantsIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      longform_address: '',
      latitude: '',
      longitude: '',
      restaurants: [{acceptsCash: true, taxrate: '', hours: '', deliveryPrice: '', deliveryMin: '', logoUrl: '', name: '', apiKey: ''}]
    }
  }

  componentDidMount() {
    setTimeout(this.fetchAddress.bind(this), 2000);
    setTimeout(this.fetchRestaurants.bind(this), 3000);
  }

  fetchAddress() {
    fetch(`/api/v1/addresses.json`,
      {credentials: "same-origin",
      headers: {"Content-Type": "application/json"}})
      .then(response => response.json())
      .then(body => {
        this.setState({
          longform_address: body.longform_address,
          latitude: body.latitude,
          longitude: body.longitude
      })
    })
  }

  fetchRestaurants() {
    let token = process.env.REACT_APP_EAT_STREET_TOKEN
    fetch(`https://api.eatstreet.com/publicapi/v1/restaurant/search?latitude=${this.state.latitude}&longitude=${this.state.longitude}&method=delivery&search=pizza&access-token=${token}`)
      .then(response => response.json())
      .then(body => {
        this.setState({ restaurants: body.restaurants })
      })
  }

  render() {
    let filtered_restaurants = this.state.restaurants.filter(restaurant => restaurant.acceptsCash == true )
    let restaurants = filtered_restaurants.map(restaurant => {
      return(
        <RestaurantTile
          key={restaurant.apiKey}
          logoUrl={restaurant.logoUrl}
          name={restaurant.name}
          apiKey={restaurant.apiKey} />
      )
    })
    if (this.state.restaurants.length == 0) {
      return(
        <div>
        <div className="index-page-nav-bar-buffer"></div>
        <ErrorTile name="No nearby restaurants could be found for this address. :(" />
        </div>
      )
    } else {
      return(
        <div>
        <div className="index-page-nav-bar-buffer"></div>
        {restaurants}
        </div>
      )

    }

  }
}



export default RestaurantsIndex
