import React, { Component } from 'react'
import $ from 'jquery'
import 'foundation-sites'


class RestaurantShowSubmenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false
    }
    this.handleActivity = this.handleActivity.bind(this);
  }
  componentDidMount() {
    $(document).foundation();
  }

  handleActivity() {
    if(this.state.active) {
      this.setState({ active: false })
    } else {
      this.setState({ active: true })
    }
  }
  // <a onClick={this.handleActivity} href="#" className={`accordion-title ${activity}`}>{this.props.name}</a>

  render() {
    let activity = ''
    if (this.state.active) {
      activity = 'is-active'
    }
    return(
      <li className="accordion-item" data-accordion-item>
        <a href="#" className="accordion-title">{this.props.name}</a>
        <div className="accordion-content" data-tab-content>
          <p>{this.props.name}</p>
        </div>
      </li>
    )
  }
}

export default RestaurantShowSubmenu
