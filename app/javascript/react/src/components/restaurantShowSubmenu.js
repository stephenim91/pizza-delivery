import React, { Component } from 'react'
import Modal from 'react-modal';
import { NavLink } from 'react-router-dom'


const modalParameters = {
  content : {
    top: '30%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  }
};


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
            itemApi={item.apiKey}
            name={item.name}
            description={item.description}
            price={item.basePrice.toFixed(2)}
            restaurantApiKey={this.props.restaurantApiKey} />
        )
      })
      activity = 'active'
    }

    return(
      <div className="submenu">
        <h4 onClick={this.handleActivity} className={`${activity} submenu-title`}>{this.props.name}</h4>
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
      instruction: '',
      cartModalIsOpen: false
    }
    this.handleInstruction = this.handleInstruction.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleMinus = this.handleMinus.bind(this)
    this.handlePlus = this.handlePlus.bind(this)
    this.handleCartModal = this.handleCartModal.bind(this)
  }

  handleInstruction(event) {
    let value = event.target.value
    this.setState({ instruction: value })
  }

  handleCartModal() {
    this.setState({cartModalIsOpen: false});
  }

  handleAdd(event) {
    event.preventDefault;
    let payload = {instruction: this.state.instruction, item_api: this.props.itemApi, name: this.props.name, price: this.props.price, quantity: this.state.quantity, restaurant: this.props.restaurantApiKey}
    fetch(`/api/v1/orders.json`, {
      method: "POST",
      body: JSON.stringify(payload),
      credentials: "same-origin",
      headers: {"Content-Type": "application/json"}
    })
    this.setState({ instruction: '', quantity: 1 , cartModalIsOpen: true})
  }

  handleMinus() {
    if(this.state.quantity > 1) {
      let newQuantity = (this.state.quantity - 1)
      this.setState( { quantity: newQuantity })
    }
  }

  handlePlus() {
    if(this.state.quantity < 99) {
      let newQuantity = (this.state.quantity + 1)
      this.setState({ quantity: newQuantity })
    }
  }

  render() {
    return(
      <label className="submenu-tile">
        <div>
          <strong>{this.props.name}</strong> - <i>${this.props.price}</i>
        </div>
        <div onClick={this.handleAdd} className="submenu-button button" type="submit">Add to cart</div>
        <div>
          {this.props.description}
        </div>
        <label>
          <span>Special instructions: </span>
          <input onChange={this.handleInstruction} value={this.state.instruction} type="textbox" />
        </label>
        <span>Quantity: {this.state.quantity}</span>&nbsp;
        <span onClick={this.handleMinus} className="fa fa-minus-square-o"></span>&nbsp;
        <span onClick={this.handlePlus} className="fa fa-plus-square-o"></span>

        <Modal isOpen={this.state.cartModalIsOpen} style={modalParameters}>
          <h4 className="show-page-header">Item successfully added!</h4>
          <div>&nbsp;</div>
          <button className="button checkout-page add-more" onClick={this.handleCartModal}>Stay on this page</button>
          <NavLink onClick={this.handleCartModal} className="button checkout-page to-checkout" to='/checkout'>Take me to my cart!</NavLink>
        </Modal>

      </label>
    )
  }
}

export default RestaurantShowSubmenu
