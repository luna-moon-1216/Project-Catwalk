import React from "react";
import helperFunction from "./helperFunction.js";
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fullStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';

class OverallRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fiveStars: '',
      fourStars: '',
      threeStars: '',
      twoStars: '',
      oneStar: ''
    };
  }

}

export default OverallRating;