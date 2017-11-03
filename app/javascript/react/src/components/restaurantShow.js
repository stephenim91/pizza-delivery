import React, { Component } from 'react'
import $ from 'jquery'


class restaurantShow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [{name: '', description: ''}]
    }
  }
  componentDidMount() {
    $(document).foundation();
    setTimeout(this.fetchRestaurant.bind(this), 3000);
  }


  fetchRestaurant() {
    let token = process.env.REACT_APP_EAT_STREET_TOKEN
    fetch(`https://api.eatstreet.com/publicapi/v1/restaurant/e5ea15352cbcd4db884225aec137a02aacf5e7ab757ff906/menu?includeCustomizations=false&access-token=${token}`)
      .then(response => response.json())
      .then(body => {
        let s = body[2].items
        this.setState({ items: s })
      })
  }


  render() {
    let items = this.state.items.map(item => {
      return(
        <p><strong>{item.name}</strong>{item.description}</p>
      )


    })
    return(
      <div>

        <div className="row">
          <div className="columns">
            <h2>Accordion</h2>
            <p>Accordions lets you organize and navigate multiple documents in a single container. Highly useful for switching between items in the container specially when you have a large amount of content.</p>
          </div>
        </div>

        <div className="row">
          <div className="columns">
            <ul className="accordion" data-accordion>
          <li className="accordion-item is-active" data-accordion-item>
            <a href="#" className="accordion-title">Accordion 1</a>
            <div className="accordion-content" data-tab-content >
              {items}
              <a href="#">Nowhere to Go</a>
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

export default restaurantShow
