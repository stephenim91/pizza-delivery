import React, { Component } from 'react'
// import $ from 'jquery'
import SearchBar from './searchBar'
import Modal from 'react-modal';

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
          <h6>We take pizza out of the ovens of nearby restaurants and into you mouth!<br /><i>-Thomas Jefferson</i></h6>
          <h6>We take pizza very seriously.<br /><i>-Immanuel Kant</i></h6>
          <div className="huge-emoji">🙄 🦀 ⁉️</div>
          <div className="huge-emoji">💻 ☎️ 👇</div>
          <div className="huge-emoji">🚙 💭 🕓</div>
          <div className="huge-emoji">🍕 🍕 🍕</div>
        </div>
      </div>
    )
  }
}

export default LandingPage
