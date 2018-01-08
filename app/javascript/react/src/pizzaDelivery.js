import React, { Component } from 'react'
import LandingPage from './containers/landingPage'
import RestaurantsIndex from './containers/restaurantsIndex'
import RestaurantShow from './components/restaurantShow'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import TopNavBar from './components/topNavBar'
import CheckoutShow from './containers/checkoutShow'
import PaymentShow from './containers/paymentShow'
import Modal from 'react-modal';



const modalParameters = {
  content : {
    top: '45%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  }
};

class PizzaDelivery extends Component {
  constructor(props) {
    super(props)
    this.state = {
      landingPageModalIsOpen: true,
      navBarText: 'Sign Up'
    }
  }

  componentDidMount() {
    fetch(`/api/v1/users.json`,
      {credentials: "same-origin",
      headers: {"Content-Type": "application/json"}})
      .then(response => response.json())
      .then(body => {
        if(body.name != "$oij233f09jf2n%23jj2323h$9h23") {
          this.setState({ landingPageModalIsOpen: false })
          if(body.email != "$oij233f09jf2n%23jj2323h$9h23") {
            this.setState({ navBarText: 'Sign Out'})
          }
        }
      })
  }

  render() {
    return(
      <div>
        <TopNavBar
          navBarText={this.state.navBarText}/>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component = {LandingPage} />
            <Route exact path='/restaurants' component={RestaurantsIndex} />
            <Route path='/restaurants/:id' component={RestaurantShow} />
            <Route exact path='/checkout' component={CheckoutShow} />
            <Route exact path='/confirmation' component={PaymentShow} />
          </Switch>
        </BrowserRouter>

        <Modal isOpen={this.state.landingPageModalIsOpen} style={modalParameters}>
          <div className="modal-white-space">&nbsp;</div>
        </Modal>

      </div>
    )
  }
}

export default PizzaDelivery
