import React, { Component } from 'react'



class CheckoutTile extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
  }

  render() {
    return(
      <div className="row checkout-tile">
        <div className="small-2 column"></div>
        <div className="small-6 column">
          <p><strong>{this.props.name}</strong></p>
        </div>
        <div className="small-2 column">
          <p>{this.props.quantity}</p>
        </div>
        <div className="small-2 column">
          <p>${this.props.price}</p>
        </div>
        <span onClick={this.props.handleDelete} title={this.props.id} className="fa fa-trash"></span>

      </div>
    )
  }
}

export default CheckoutTile
