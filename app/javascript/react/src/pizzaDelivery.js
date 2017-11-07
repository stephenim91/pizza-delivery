import React, { Component } from 'react'
import LandingPage from './containers/landingPage'
import RestaurantsIndex from './containers/restaurantsIndex'
import RestaurantShow from './components/restaurantShow'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import TopNavBar from './components/topNavBar'
import CheckoutShow from './containers/checkoutShow'



class PizzaDelivery extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }


  render() {
    return(
      <div>
        <TopNavBar />
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component = {LandingPage} />
            <Route exact path='/restaurants' component={RestaurantsIndex} />
            <Route path='/restaurants/:id' component={RestaurantShow} />
            <Route path='/checkout' component={CheckoutShow} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default PizzaDelivery
