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
            price={item.basePrice} />
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

const RestaurantShowSubmenuItem = props => {
  return(
    <label className="submenu-tile">
      <span>
        &nbsp;<strong>{props.name}</strong> - ${props.price}<br/>{props.description}
      </span>
      <label>
        <span>Special instructions: </span>
        <input type="textbox" />
        <div className="submenu-button button" type="submit">Add to cart</div>
      </label>

    </label>

  )
}

export default RestaurantShowSubmenu
