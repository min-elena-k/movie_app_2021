import React, { Component } from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css';

class App extends Component {
  
  // 미래에 사용할 state 를 미리 정의하는 것 필수 아님!
  // 다만 계획한 것일 뿐
  // 가능하면 미리 선언해주는 것이 좋지만, 후에 setState로 추가해도 무방하다
  state = {
    isLoading: true,
    movies: []
  }

  // data fetching 에 소요되는 시간을 기다리게 하기위해
  // 비동기 방식 사용
  // getMovies 선언 없이 async componentDidMount() 할수도 있지만..
  // LifeCycle 함수보단 원하는 data fetching 부분에서 비동기를 걸어주겠다
  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    // this.setState({ movies: movies })
    this.setState({ movies, isLoading: false });
  }
  
  // render 다음 호출되는 라이프 사이클 메서드는 !
  // componentDidMount @!! 그래서 data fetch 로직을
  // componentDidMount 내에서 실행하고자 한다
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
          ): (
            <div className="movies">
               {movies.map(movie => (
                <Movie
                  key={movie.id}
                  id={movie.id} 
                  year={movie.year} 
                  title={movie.title} 
                  summary={movie.summary} 
                  poster={movie.medium_cover_image}
                  genres={movie.genres} 
                />
              ))}
            </div>
          )}
      </section>
    );
  }
}

export default App;