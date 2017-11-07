import React, { Component } from 'react'
import RestaurantShowSubmenu from './restaurantShowSubmenu'
// import $ from 'jquery'




class RestaurantShow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menu: [{key: 'static', name: '', items: [{name: '', description: '', apiKey: ''}]}],
      name: ''
    }
  }

  componentDidMount() {
    let token = process.env.REACT_APP_EAT_STREET_TOKEN
    let restaurantId = this.props.match.params.id
    fetch(`https://api.eatstreet.com/publicapi/v1/restaurant/${restaurantId}/menu?includeCustomizations=false&access-token=${token}`)
    .then(response => response.json())
    .then(body => {
      let menu = body
      this.setState({ menu: menu })
    })
  }

  render() {
    let products = this.state.menu.map(submenu => {
      return(
        <RestaurantShowSubmenu
          key={submenu.apiKey}
          name={submenu.name}
          items={submenu.items} />
      )
    })
    return(
      <div>
        <div className="row">
          <div className="small-6 column">
            <h2></h2>
            Restaurant description<br/>Restaurant Reviews and ratings<br />popout form to add rating
          </div>
          <div className="small-6 column">
            <h2>Menu</h2>
            {products}
          </div>
        </div>
      </div>
    )
  }
}

export default RestaurantShow
