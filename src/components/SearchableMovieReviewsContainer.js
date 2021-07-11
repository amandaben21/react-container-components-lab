import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'eLCICIe26TdKMokEV4hf3HGPKocuZ9OG';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {

    constructor() {
      super() 
      this.state = {
        reviews: [], 
        searchTerm: ''
      }
    }
  
    fetchReviews() {
      fetch(URL + `&query=${this.state.searchTerm}`)
        .then(resp => resp.json())
        .then(data => this.setState({reviews: data.results}))
    }
  
    handleChange = (e) => {
      this.setState({
        [e.target.name]:e.taget.value
      })
    }
  
    handleSubmit = (e) => {
      e.preventDefault()
      this.fetchReviews()
      this.setState({searchTerm: ""})
    }
  
  
  
    render() {
      return (
        <div className="searchable-movie-reviews">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="search">Search</label>
            <input type="text" name="searchTerm" id="search" onChange={this.handleChange} />
            <input type="submit" />
          </form>
          <MovieReviews reviews={this.state.reviews}/>
        </div>
      )
    }
}