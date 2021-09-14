import React from 'react';
// import Rating from 'react-rating'; --> This is for later
import ReviewTile from './ReviewTile.jsx';
import getAllData from './helperFunction.js';


class ReviewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewsList: []
    }

  }

  componentDidUpdate(prevProps) {
    if (this.props.currentProductId !== prevProps.currentProductId) {
      getAllData.getAllReviews(this.props.currentProductId)
        .then((response) => {
          let allReviews = response.data.results;
          console.log(allReviews);
          this.setState({
            reviewsList: allReviews
          })
        })
        .catch(err => {
          console.log(err);
        })
    }
  }

  render() {
    return (
      <div id="reviews-list">
        <h1>Reviews List</h1>
        <h5>{this.props.currentProductId}</h5>
        <ReviewTile productId={this.props.currentProductId} reviewsList={this.state.reviewsList} />
      </div>
    );
  }
}

export default ReviewsList;