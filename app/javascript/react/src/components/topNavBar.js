import React, { Component } from 'react'
// import $ from 'jquery'
// import 'foundation-sites'

class TopNavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  componentDidMount() {
    // $(document).foundation();
  }

  render() {
    return(
    <div className="nav-bar">
      <span>
        <a href='/' className="nav-bar-title">Pizza Delivery!</a>
      </span>

      <span className="fa fa-lg fa-shopping-cart nav-bar-checkout"></span>


    </div>

    )
  }

}
export default TopNavBar
