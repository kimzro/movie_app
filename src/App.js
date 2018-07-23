import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';



class App extends Component {
  state = {
  }

  componentWillMount(){

  }

  componentDidMount(){
    this._getMovies()
  }

  _renderMovies=() => {
    const movies = this.state.movies.map(movies =>{
      return <Movie 
        title={movies.title_english} 
        poster={movies.medium_cover_image} 
        key={movies.id} 
        genres={movies.genres} 
        synopsis={movies.synopsis}
      />
    })
    return movies
  }

   _getMovies = async ()=>{ //이전작업이 끝나기를 기다리지 않을 때 async
    const movies=await this._callApi() 
    this.setState({
      movies
    })
  }

  _callApi=()=>{
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}



export default App;