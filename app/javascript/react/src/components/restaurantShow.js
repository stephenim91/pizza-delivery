import React, { Component } from 'react'
import RestaurantShowSubmenu from './restaurantShowSubmenu'
// import $ from 'jquery'




class RestaurantShow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menu: [{key: 'static', name: '', items: [{name: '', description: '', apiKey: ''}]}]
    }
  }
  componentDidMount() {
    // $(document).foundation();
    setTimeout(this.fetchRestaurant.bind(this), 3000);
  }
  // componentDidUpdate() {
  //   $(document).foundation();
  // }


  fetchRestaurant() {
    let token = process.env.REACT_APP_EAT_STREET_TOKEN
    let restaurantId = this.props.match.params.id
    fetch(`https://api.eatstreet.com/publicapi/v1/restaurant/${restaurantId}/menu?includeCustomizations=false&access-token=${token}`)
      .then(response => response.json())
      .then(body => {
        let menu = body
        this.setState({ menu: menu })
      })
  }

  // let submenuItems = submenu.items.map(item => {
  //   return(
  //     <p><strong>{item.name}</strong>{item.description}</p>
  //   )
  // })
  //
  // <li className="accordion-item" data-accordion-item>
  //   <a href="#" className="accordion-title">{submenu.name}</a>
  //   <div className="accordion-content" data-tab-content>
  //     <p>{this.props.name}</p>
  //   </div>
  // </li>
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
        <h2>Menu</h2>
        <div className="row">
          <div className="small-6 column">
            Restaurant description<br/>Restaurant Reviews and ratings<br />popout form to add rating
          </div>
          <div className="small-6 column">
            {products}
          </div>
        </div>
      </div>
    )
  }
}

export default RestaurantShow
