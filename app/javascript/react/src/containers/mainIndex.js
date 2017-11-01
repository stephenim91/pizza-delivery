import React, { Component } from 'react'
import $ from 'jquery'
import 'foundation-sites'
import SearchBar from './searchBar'


class MainIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {
    $(document).foundation();
  }

  render() {
    return(
      <div>
        <SearchBar />
        <div class="row">
          <div class="columns">
            <h2>Accordion</h2>
            <p>Accordions lets you organize and navigate multiple documents in a single container. Highly useful for switching between items in the container specially when you have a large amount of content.</p>
          </div>
        </div>

        <div class="row">
          <div class="columns">
            <ul class="accordion" data-accordion>
          <li class="accordion-item is-active" data-accordion-item>
            <a href="#" class="accordion-title">Accordion 1</a>
            <div class="accordion-content" data-tab-content >
              <p>Panel 1. Lorem ipsum dolor</p>
              <a href="#">Nowhere to Go</a>
            </div>
          </li>
          <li class="accordion-item" data-accordion-item>
            <a href="#" class="accordion-title">Accordion 2</a>
            <div class="accordion-content" data-tab-content>
              <textarea></textarea>
              <button class="button">I do nothing!</button>
            </div>
          </li>
          <li class="accordion-item" data-accordion-item>
            <a href="#" class="accordion-title">Accordion 3</a>
            <div class="accordion-content" data-tab-content>
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

export default MainIndex
