import React, { Component } from 'react'

class ErrorTile extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {

      return(
          <div className="error row restaurant-tile">
            {this.props.name}
        </div>
      )

  }
}

export default ErrorTile;
