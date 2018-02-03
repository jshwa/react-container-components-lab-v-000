import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'd5dad6d196ce48d0adc1f3a955a58810';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends React.Component{
  constructor(){
    super();
    this.state = {
      reviews: [],
      searchTerm: ""
    }
  }

  getMovies = () => {
    fetch(URL + '&query=' + this.state.searchTerm, {mode: 'cors'}).then(res => {
      return res.json()
    }).then(response => {
      this.setState({
        reviews: response.results,
      })
    })
  }

  componentWillMount = () => {
    this.getMovies();
  }

  render(){
    return(
      <div className='searchable-movie-reviews'>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
