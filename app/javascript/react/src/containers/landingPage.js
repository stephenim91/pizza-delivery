import React, { Component } from 'react'
import SearchBar from './searchBar'


class LandingPage extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return(
      <div>
        <div className="search-section-landing-page">
          <div className="search-section-top-spacer"></div>
          <SearchBar />
          <div className="search-section-bottom-spacer"></div>
        </div>

        <div className="explanation-landing-page">
          <p>We take pizza out of the ovens of nearby restaurants and into you mouth!<br /><i>-Thomas Jefferson</i></p>
          <p>We take pizza very seriously.<br /><i>-Immanuel Kant</i></p>
          <p>We take pizza very seriously.<br /><i>-Immanuel Kant</i></p>
          <p>We take pizza very seriously.<br /><i>-Immanuel Kant</i></p>
          <p>We take pizza very seriously.<br /><i>-Immanuel Kant</i></p>
          <p>We take pizza very seriously.<br /><i>-Immanuel Kant</i></p>
          <p>We take pizza very seriously.<br /><i>-Immanuel Kant</i></p>
          <p>We take pizza very seriously.<br /><i>-Immanuel Kant</i></p>
          <p>We take pizza very seriously.<br /><i>-Immanuel Kant</i></p>
        </div>
      </div>
    )
  }
}

export default LandingPage
