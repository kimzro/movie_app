import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movies = [
  {
    title:"Matrix",
    poster:"http://img1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/liveboard/movie/ea2a05b045324e4e872d6b7ea0462592.jpg"
  },
  {
    title:"Full Metal Jacket",
    poster: "http://img1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/liveboard/movie/ea2a05b045324e4e872d6b7ea0462592.jpg"
  },
  {
    title:"Old boy",
    poster: "http://img1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/liveboard/movie/ea2a05b045324e4e872d6b7ea0462592.jpg"
  },
  {
    title:"Star Wars",
    poster: "http://img1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/liveboard/movie/ea2a05b045324e4e872d6b7ea0462592.jpg"
  }
]

class App extends Component {
  componentWillMount(){

  }

  render() {
    return (
      <div className="App">
        {movies.map((movies, index) =>{
          return <Movie title={movies.title} poster={movies.poster} key={index} />
        })}
      </div>
    );
  }

  componentDidMount(){
    
  }
}

export default App;