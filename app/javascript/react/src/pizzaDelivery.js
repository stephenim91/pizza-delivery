import React, { Component } from 'react'
import LandingPage from './containers/landingPage'
import RestaurantsIndex from './containers/restaurantsIndex'
import { BrowserRouter, Route, Switch } from 'react-router-dom'



class PizzaDelivery extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }


  render() {
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component = {LandingPage} />
          <Route path='/restaurants' component={RestaurantsIndex} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default PizzaDelivery
