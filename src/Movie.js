import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './movie.css';

class Movie extends Component{
    static propTypes = {
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired

    }

    render(){
        return(
        <div>
            <MoviePoster />
            <h1>{this.props.title}</h1>
        </div>
        )
    }
}

class MoviePoster extends Component{

    static propTypes={
        poster: PropTypes.string.isRequired
    }
    render(){
      return(
        <img src="http://img1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/liveboard/movie/ea2a05b045324e4e872d6b7ea0462592.jpg" />
      )
    }
  }

export default Movie;