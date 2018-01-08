import React, { Component } from 'react'
import Moment from 'react-moment';



Moment.globalFormat = 'D MMM YYYY';

class SubmittedReviewTile extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
  }

  render() {
    let oneStar = '☆'
    let twoStar = '☆'
    let threeStar = '☆'
    let fourStar = '☆'
    let fiveStar = '☆'

    if(this.props.rating == 1) {
      oneStar = '★'
    } else if(this.props.rating == 2){
      oneStar = '★'
      twoStar = '★'
    } else if(this.props.rating == 3){
      oneStar = '★'
      twoStar = '★'
      threeStar = '★'
    } else if(this.props.rating == 4){
      oneStar = '★'
      twoStar = '★'
      threeStar = '★'
      fourStar = '★'
    } else if(this.props.rating == 5){
      oneStar = '★'
      twoStar = '★'
      threeStar = '★'
      fourStar = '★'
      fiveStar = '★'
    }

    let date = <Moment>{this.props.date}</Moment>

    return(
      <div className="submitted-review-tile">
      <p className=""><strong>{this.props.username}</strong> - <i>{date}</i></p>
      <div className="submitted-review-tile-rating">
        <span>{oneStar}</span><span>{twoStar}</span><span>{threeStar}</span><span>{fourStar}</span><span>{fiveStar}</span>
      </div>
      <p>{this.props.body}</p>
      </div>
    )
  }
}

export default SubmittedReviewTile
