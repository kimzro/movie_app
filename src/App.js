import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';



class App extends Component {
  state = {
    greeting: 'Hello!',
    movies : [
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
  }


  componentWillMount(){

  }

  render() {
    return (
      <div className="App">
        {this.state.movies.map((movies, index) =>{
          return <Movie title={movies.title} poster={movies.poster} key={index} />
        })}
      </div>
    );
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        movies: [
          ...this.state.movies, //이전영화리스트 그대로 두고 뒤에 추가.
          {
            title: "Transporting",
            poster: "http://img1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/liveboard/movie/ea2a05b045324e4e872d6b7ea0462592.jpg"
          }
        ]
      })
    }, 5000)
  }

}

export default App;