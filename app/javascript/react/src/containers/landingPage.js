import React, { Component } from 'react'
import $ from 'jquery'
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
        <h1 className="header-landing-page">Pizza Delivery!</h1>

        <div className="search-section-landing-page">
          <div className="search-section-top-spacer">oij</div>
          <SearchBar />
        </div>

        <div className="explanation-landing-page">
          <p>We take pizza out of the ovens of nearby restaurants and into you mouth!<br /><i>-Thomas Jefferson</i></p>
        </div>
      </div>
    )
  }
}

export default LandingPage
