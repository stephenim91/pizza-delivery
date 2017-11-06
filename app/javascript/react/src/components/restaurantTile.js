import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


class RestaurantTile extends Component {
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
      <div>
        <div className="grid-x restaurant-tile">
          <div className="small-6 large-3 cell">
            <img src={this.props.logoUrl}></img>
          </div>
          <div className="small-6 large-3 cell">
            <NavLink to={`/restaurants/${this.props.apiKey}`}>{this.props.name}</NavLink>
          </div>
        </div>
      </div>
    )
  }
}

export default RestaurantTile
