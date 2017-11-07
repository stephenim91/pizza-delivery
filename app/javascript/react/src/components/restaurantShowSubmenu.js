import React, { Component } from 'react'


class RestaurantShowSubmenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false
    }
    this.handleActivity = this.handleActivity.bind(this);
  }
  componentDidMount() {
    // $(document).foundation();
  }

  handleActivity(event) {
    event.preventDefault;
    if(this.state.active) {
      this.setState({ active: false })
    } else {
      this.setState({ active: true })
    }
  }
  // <a onClick={this.handleActivity} href="#" className={`accordion-title ${activity}`}>{this.props.name}</a>

  render() {
    let activity = ''
    let items = null
    if (this.state.active) {
      items = this.props.items.map(item => {
        return(
          <RestaurantShowSubmenuItem
            key={item.apiKey}
            name={item.name}
            description={item.description}
            price={item.basePrice.toFixed(2)}
            restaurantApiKey={this.props.restaurantApiKey} />
        )
      })
    }

    return(
      <div className="submenu">
        <h4 onClick={this.handleActivity} className="submenu-title">{this.props.name}</h4>
        <div className="submenu-content">
          {items}
        </div>
      </div>
    )
  }
}

class RestaurantShowSubmenuItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quantity: 1,
      instruction: ''
    }
    this.handleInstruction = this.handleInstruction.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
  }

  handleInstruction(event) {
    let value = event.target.value
    this.setState({ instruction: value })
  }

  handleAdd(event) {
    event.preventDefault;
    let payload = {instruction: this.state.instruction, name: this.props.name, price: this.props.price, quantity: this.state.quantity, restaurant: this.props.restaurantApiKey}
    fetch(`/api/v1/orders.json`, {
      method: "POST",
      body: JSON.stringify(payload),
      credentials: "same-origin",
      headers: {"Content-Type": "application/json"}
    })
    this.setState({ instruction: '', quantity: 1 })
  }

  render() {
    return(
      <label className="submenu-tile">
        <span>
          &nbsp;<strong>{this.props.name}</strong> - <i>${this.props.price}</i><br/>{this.props.description}
        </span>
        <label>
          <span>Special instructions: </span>
          <input onChange={this.handleInstruction} value={this.state.instruction} type="textbox" />
        </label>
        <span>Quantity: {this.state.quantity}</span>
        <div onClick={this.handleAdd} className="submenu-button button" type="submit">Add to cart</div>

      </label>
    )
  }
}

export default RestaurantShowSubmenu
