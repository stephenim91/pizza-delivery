import React, { Component } from 'react'
import RestaurantShowSubmenu from './restaurantShowSubmenu'
import Modal from 'react-modal';
import SubmittedReviewTile from './submittedReviewTile'



const modalParameters = {
  content : {
    top: '30%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  }
};

class RestaurantShow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menu: [{key: 'static', name: '', items: [{name: '', description: '', apiKey: ''}]}],
      taxRate: '',
      hours: '',
      deliveryPrice: '',
      deliveryMin: '',
      logoUrl: '',
      restaurantName: '',
      restaurantApiKey: '',
      reviewModalIsOpen: false,
      starSubmittedValue: 0,
      reviewBody: '',
      reviewSubmitError: '',
      reviews: [{rating: '', description: '', username: '', restaurant: '', id: 'initial', created_at: ''}],
      ratingAvg: 0,
      guest: true
    }
    this.handleReviewModal = this.handleReviewModal.bind(this);
    this.handleStarClick = this.handleStarClick.bind(this);
    this.handleReviewChange = this.handleReviewChange.bind(this);
    this.handleReviewModalSubmit = this.handleReviewModalSubmit.bind(this);
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
    fetch(`https://api.eatstreet.com/publicapi/v1/restaurant/${restaurantId}/?&access-token=${token}`)
    .then(response => response.json())
    .then(body => {
      let restaurant = body.restaurant
      this.setState({ taxRate: restaurant.taxRate, hours: restaurant.hours, deliveryPrice: restaurant.deliveryPrice, deliveryMin: restaurant.deliveryMin, logoUrl: restaurant.logoUrl, restaurantApiKey: restaurant.apiKey, restaurantName: restaurant.name })
    })
    fetch(`/api/v1/users.json`,
      {credentials: "same-origin",
      headers: {"Content-Type": "application/json"}})
      .then(response => response.json())
      .then(body => {
        if(body.email != "$oij233f09jf2n%23jj2323h$9h23") {
          this.setState({ guest: false })
        }
      })
    fetch(`/api/v1/reviews.json`,
      {credentials: "same-origin",
      headers: {"Content-Type": "application/json"}})
      .then(response => response.json())
      .then(body => {
        let allReviews = body
        let reviews = allReviews.filter(object => { return object.restaurant == restaurantId })
        let reversedReviews = reviews.reverse()
        let ratingSum = 0.0
        let count = 0
        reviews.forEach(review => {
          ratingSum = ratingSum + review.rating;
          count += 1;
         })
         let ratingAvg = Math.round(ratingSum / count)
         if(ratingAvg == NaN) {rating=Avg = 0}
        this.setState({reviews: reversedReviews, ratingAvg: ratingAvg })
      })
  }

  handleReviewModal() {
    this.setState({reviewModalIsOpen: !this.state.reviewModalIsOpen});
  }

  handleStarClick(event) {
    this.setState({ starSubmittedValue: parseInt(event.target.title) })
  }

  handleReviewChange(event) {
    this.setState({ reviewBody: event.target.value })
  }

  handleReviewModalSubmit() {
    if(this.state.reviewBody == '' || this.state.starSubmittedValue == 0) {
      this.setState({ reviewSubmitError: 'Please complete all fields' })
    } else {
      fetch(`/api/v1/reviews.json`, {
        method: "POST",
        body: JSON.stringify({rating: this.state.starSubmittedValue, body: this.state.reviewBody, restaurant: this.state.restaurantApiKey}),
        credentials: "same-origin",
        headers: {"Content-Type": "application/json"}})
        .then(response => response.json())
        .then(body => {
          this.setState({reviews: [...this.state.reviews, body]})
        })
      this.setState({ starSubmittedValue: 0, reviewBody: '', reviewSubmitError: '', reviewModalIsOpen: false})
    }
  }

  render() {
    let mappedReviews = this.state.reviews.map(review => {
      return(
        <SubmittedReviewTile
          key={review.id}
          rating={review.rating}
          body={review.body}
          username={review.username}
          date={review.created_at}/>
      )
    })
    let products = this.state.menu.map(submenu => {
      return(
        <RestaurantShowSubmenu
          key={submenu.apiKey}
          name={submenu.name}
          items={submenu.items}
          restaurantApiKey={this.state.restaurantApiKey} />
      )
    })

    let deliveryFee = this.state.deliveryPrice
    if (deliveryFee == undefined) {
      deliveryFee = 'Free'
    } else {
      deliveryFee = `Fee. $${deliveryFee}`
    }

    let deliveryMin = this.state.deliveryMin
    if (deliveryMin == '') {
      deliveryMin = 'No Minimum'
    } else {
      deliveryMin = `Min. $${deliveryMin}`
    }
    let oneStar = '☆'
    let twoStar = '☆'
    let threeStar = '☆'
    let fourStar = '☆'
    let fiveStar = '☆'

    let starSubmitted = ''
    if(this.state.starSubmittedValue) {
      starSubmitted = '-submitted'
    }
    if(this.state.starSubmittedValue == 1) {
      oneStar = '★'
    } else if(this.state.starSubmittedValue == 2){
      oneStar = '★'
      twoStar = '★'
    } else if(this.state.starSubmittedValue == 3){
      oneStar = '★'
      twoStar = '★'
      threeStar = '★'
    } else if(this.state.starSubmittedValue == 4){
      oneStar = '★'
      twoStar = '★'
      threeStar = '★'
      fourStar = '★'
    } else if(this.state.starSubmittedValue == 5){
      oneStar = '★'
      twoStar = '★'
      threeStar = '★'
      fourStar = '★'
      fiveStar = '★'
    }

    let oneFirmStar = '☆'
    let twoFirmStar = '☆'
    let threeFirmStar = '☆'
    let fourFirmStar = '☆'
    let fiveFirmStar = '☆'

    if(this.state.ratingAvg == 1) {
      oneFirmStar = '★'
    } else if(this.state.ratingAvg == 2){
      oneFirmStar = '★'
      twoFirmStar = '★'
    } else if(this.state.ratingAvg == 3){
      oneFirmStar = '★'
      twoFirmStar = '★'
      threeFirmStar = '★'
    } else if(this.state.ratingAvg == 4){
      oneFirmStar = '★'
      twoFirmStar = '★'
      threeFirmStar = '★'
      fourFirmStar = '★'
    } else if(this.state.ratingAvg == 5){
      oneFirmStar = '★'
      twoFirmStar = '★'
      threeFirmStar = '★'
      fourFirmStar = '★'
      fiveFirmStar = '★'
    }

    let reviewButtonText = <button className="button checkout-page" onClick={this.handleReviewModal}>Add a New Review</button>

    if(this.state.guest) {
      reviewButtonText = <a className ="button checkout-page" href='/logout'>Sign In to Add a Reiew</a>
    }
    return(
      <div>
        <div className="show-page-nav-bar-buffer"></div>
        <div className="row">
          <div className="small-5 column">
          <div className="show-page restaurant-section">

            <div className="row">
              <h3 className="show-page-header">{this.state.restaurantName}</h3>
            </div>

            <div className="row">
              <div className="small-6 column">
                <img src={this.state.logoUrl}></img>
              </div>
              <div className="small-6 column">
                <p className="restaurant-info">Delivery {deliveryFee} | {deliveryMin}</p>
                <div className="firm-rating">
                  <span>{oneFirmStar}</span><span>{twoFirmStar}</span><span>{threeFirmStar}</span><span>{fourFirmStar}</span><span>{fiveFirmStar}</span>
                </div>
                <div>
                  {reviewButtonText}
                  <Modal isOpen={this.state.reviewModalIsOpen} style={modalParameters}>
                    <div className="new-review-modal">
                    <div className="fa fa-times new-review-close-button" onClick={this.handleReviewModal}></div>
                    <h4 className="show-page-header">New Review</h4>
                    <p className="show-page-warning-text">{this.state.reviewSubmitError}</p>
                      <div className={`rating${starSubmitted}`}>
                      <span onClick={this.handleStarClick} title="5">{fiveStar}</span>
                      <span onClick={this.handleStarClick} title="4">{fourStar}</span>
                      <span onClick={this.handleStarClick} title="3">{threeStar}</span>
                      <span onClick={this.handleStarClick} title="2">{twoStar}</span>
                      <span onClick={this.handleStarClick} title="1">{oneStar}</span>
                      </div>
                      <label>
                        Body:
                        <input onChange={this.handleReviewChange} className="new-review-text-area" type="text" />
                      </label>
                      <button className="button checkout-page new-review" type="submit" onClick={this.handleReviewModalSubmit}>Submit</button>
                  </div>
                  </Modal>
                </div>
              </div>
            </div>

          </div>
          <div className="row show-page reviews-section">
            <h4 className="show-page-header">Reviews and Ratings</h4>
            {mappedReviews}
          </div>
          </div>

          <div className="show-page menu-section small-6 column">
            <h3 className="show-page-header">Menu</h3>
            {products}
          </div>

        </div>
      </div>
    )
  }
}

export default RestaurantShow
