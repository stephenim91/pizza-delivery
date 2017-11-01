import React, { Component } from 'react'
import $ from 'jquery'
import 'foundation-sites'


class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchValue: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    $(document).foundation();
  }

  handleChange(event) {
    this.setState({ searchValue: event.target.value })
  }

  render() {
    console.log(this.state.searchValue)
    return(
      <label>
        Search for pizza joints near you!
        <input onChange={this.handleChange} value={this.state.searchValue} placeholder='Enter your address' />
      </label>
    )
  }
}

export default SearchBar
