import React from 'react';
import axios from 'axios';

import SearchBar from './SearchBar.jsx';
import Overview from './product_overview/App.jsx';
import RatingsReviews from './ratings_reviews/RatingsReviews.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e, id) {
    e.preventDefault();
    this.setState({ currentProduct: Number(id) })
  }

  componentDidMount() {
    axios.get('/sedna/products')
      .then((response) => {
        this.setState({
          currentProduct: response.data[0].id
        })
      })
      .catch((error) => {
        console.error(error);
      })
  }

  render() {
    return (
      <div>
        <h1>Hello Sedna</h1>
        <SearchBar handleClick={this.handleClick} />
        <Overview id={this.state.currentProduct} />
        <RatingsReviews currentProduct={this.state.currentProduct} />
      </div>
    )
  }
}

export default App;