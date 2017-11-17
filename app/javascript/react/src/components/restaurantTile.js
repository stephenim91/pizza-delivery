import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'



class RestaurantTile extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
  }

  render() {
    return(
      <div>
        <div className="row restaurant-tile">
          <div className="small-6 large-3 column">
            <img src={this.props.logoUrl}></img>
          </div>
          <div className="small-6 large-3 column">
            <NavLink className="index-page restaurant-name" to={`/restaurants/${this.props.apiKey}`}>{this.props.name}</NavLink>
          </div>
        </div>
      </div>
    )
  }
}

export default RestaurantTile
