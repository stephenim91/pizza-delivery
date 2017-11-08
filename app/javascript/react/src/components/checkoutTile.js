import React, { Component } from 'react'

class CheckoutTile extends Component {
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
      <div className="row">
        <div className="small-2 column"></div>
        <div className="small-6 column">
          <p><strong>{this.props.name}</strong></p>
        </div>
        <div className="small-2 column">
          <p>{this.props.quantity}</p>
        </div>
        <div className="small-2 column">
          <p>{this.props.price}</p>
        </div>
      </div>
    )
  }
}

export default CheckoutTile
