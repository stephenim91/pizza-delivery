import React, { Component } from 'react'
import $ from 'jquery'
import 'foundation-sites'
import PlacesAutocomplete from 'react-places-autocomplete'


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
    event.preventDefault()

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
      <form onSubmit={this.handleSubmit}>
        <PlacesAutocomplete inputProps={inputProps} />
        <button type="submit">Search</button>
      </form>
    )
  }
}

export default SearchBar
