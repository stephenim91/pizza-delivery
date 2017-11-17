import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'



class TopNavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  
  componentDidMount() {
  }

  render() {
    return(
    <div className="nav-bar">
      <span>
        <a href='/' className="nav-bar-title">Pizza Delivery!</a>
      </span>
      <a href='/checkout/' className="fa fa-lg fa-shopping-cart nav-bar-checkout"></a>
      <span className="nav-bar-sign-in">
        <a className="nav-bar-small-text" href='/logout'>{this.props.navBarText}</a>
      </span>
    </div>
    )
  }
}
export default TopNavBar
