import React, { Component } from 'react'
import LandingPage from './containers/landingPage'
import RestaurantsIndex from './containers/restaurantsIndex'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import TopNavBar from './components/topNavBar'



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
            <Route path='/restaurants' component={RestaurantsIndex} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default PizzaDelivery
