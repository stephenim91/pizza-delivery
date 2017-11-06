import React, { Component } from 'react'

class TopNavBar extends Component {
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
      <div data-sticky-container>
    <div className="title-bar nav-bar" data-sticky data-options="marginTop:0;">
      <span className="title-bar-title nav-bar">Pizza Delivery!</span>
      <div className="title-bar-right">
        <ul className="dropdown menu align-right" data-dropdown-menu>
          <li>
            <a>Item 1</a>
            <ul className="menu">
              <li><a href="#">Item 1A</a></li>
              <li>
                <a href="#">Item 1B</a>
              </li>
              <li><a href="#">Item 1C</a></li>
            </ul>
          </li>
        </ul>


      </div>
    </div>
  </div>

    )
  }

}
export default TopNavBar
