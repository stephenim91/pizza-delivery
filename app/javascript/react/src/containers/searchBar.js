import React, { Component } from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import { NavLink } from 'react-router-dom'



class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      address: '',
      geocode: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
  }

  handleChange(address) {
    this.setState({ address: address })
  }

  handleSubmit(event) {
    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        fetch(`/api/v1/addresses.json`, {
          method: "POST",
          body: JSON.stringify({longform_address: this.state.address, latitude: latLng.lat, longitude: latLng.lng}),
          credentials: "same-origin",
          headers: {"Content-Type": "application/json"}
        })
      })
      .catch(error => console.error('Error', error))
  }

  render() {
    let inputProps = {
      value: this.state.address,
      onChange: this.handleChange,
    }

    return(
        <form className="address-search-bar">
          <p className="address-search-bar-label">Enter your address</p>
          <PlacesAutocomplete inputProps={inputProps} />
          <NavLink onClick={this.handleSubmit} className="button address-search-bar" type="submit" to='/restaurants'>Search</NavLink>
        </form>

    )
  }
}

export default SearchBar
