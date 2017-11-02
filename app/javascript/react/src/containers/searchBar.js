import React, { Component } from 'react'
import $ from 'jquery'
import 'foundation-sites'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import { NavLink } from 'react-router-dom'



class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      address: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    $(document).foundation();
  }

  handleChange(address) {
    this.setState({ address: address })
  }

  handleSubmit = (event) => {
    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error))
  }

  render() {
    let inputProps = {
      value: this.state.address,
      onChange: this.handleChange,
    }

    return(
        <form>
          <PlacesAutocomplete inputProps={inputProps} />
          <NavLink onClick={this.handleSubmit} className="button" type="submit" to='/restaurants'>Search</NavLink>
        </form>

    )
  }
}

export default SearchBar
