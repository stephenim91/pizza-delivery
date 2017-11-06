import React, { Component } from 'react'
import RestaurantShowSubmenu from './RestaurantShowSubmenu'
import $ from 'jquery'
// import 'foundation-sites'




class RestaurantShow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menu: [{items: {name: '', description: '', apiKey: ''}}]
    }
  }
  componentDidMount() {
    $(document).foundation();
    setTimeout(this.fetchRestaurant.bind(this), 3000);
  }
  componentDidUpdate() {
    $(document).foundation();
  }


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
  // <RestaurantShowSubmenu
  //   key={submenu.apiKey}
  //   name={submenu.name}
  //   items={submenu.items} />
  render() {
    let products = this.state.menu.map(submenu => {
      return(
        <li className="accordion-item" data-accordion-item>
          <a href="#" className="accordion-title">{submenu.name}</a>
          <div className="accordion-content" data-tab-content>
            <p>{this.props.name}</p>
          </div>
        </li>
      )
    })
    return(
      <div>

        <div className="row">
          <h2>Menu</h2>
        </div>

        <div className="row">
          <div className="columns">
            <ul className="accordion" data-accordion>

              {products}
              <li className="accordion-item" data-accordion-item>
                <a href="#" className="accordion-title">Accordion 2</a>
                <div className="accordion-content" data-tab-content>
                  <textarea></textarea>
                  <button className="button">I do nothing!</button>
                </div>
              </li>

              <li className="accordion-item" data-accordion-item>
                <a href="#" className="accordion-title">Accordion 2</a>
                <div className="accordion-content" data-tab-content>
                  <textarea></textarea>
                  <button className="button">I do nothing!</button>
                </div>
              </li>

              <li className="accordion-item" data-accordion-item>
                <a href="#" className="accordion-title">Accordion 2</a>
                <div className="accordion-content" data-tab-content>
                  <textarea></textarea>
                  <button className="button">I do nothing!</button>
                </div>
              </li>

              <li className="accordion-item" data-accordion-item>
                <a href="#" className="accordion-title">Accordion 2</a>
                <div className="accordion-content" data-tab-content>
                  <textarea></textarea>
                  <button className="button">I do nothing!</button>
                </div>
              </li>


              <li className="accordion-item" data-accordion-item>
                <a href="#" className="accordion-title">Accordion 2</a>
                <div className="accordion-content" data-tab-content>
                  <textarea></textarea>
                  <button className="button">I do nothing!</button>
                </div>
              </li>

              <li className="accordion-item" data-accordion-item>
                <a href="#" className="accordion-title">Accordion 3</a>
                <div className="accordion-content" data-tab-content>
                  Type your name!
                  <input type="text"></input>
                </div>
              </li>

            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default RestaurantShow
