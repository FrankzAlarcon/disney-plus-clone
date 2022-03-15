import React, { useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ProgressBar from 'react-bootstrap/ProgressBar';
import DisneyCompanies from '@containers/DisneyCompanies';
import { MovieCard } from '@components/MovieCard';
import MoviesContainer from '@containers/MoviesContainer';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '@actions/actions';
import '@styles/home.css';

function Home() {
  const {
    popularMovies, mostRatedMovies, upcomingMovies, nowPlayingMovies,
  } = useSelector((state) => state.movies);
  const { loading } = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  useEffect(() => {
    if (popularMovies.length > 0 && mostRatedMovies.length > 0
      && upcomingMovies.length > 0 && nowPlayingMovies.length > 0) {
      return;
    }
    dispatch(getMovies());
  }, []);
  return (
    loading ? (
      <div className="loading">
        <ProgressBar animated now={99} label="99%" style={{ height: '100%', fontSize: '2rem' }} />
      </div>
    ) : (
      <div className="home">
        <Carousel className="carousel-styles" fade indicators={false}>
          {nowPlayingMovies.map((item, index) => {
            if (index < 4) {
              return (
                <Carousel.Item key={`now-playing-${item.id}`}>
                  <img className="d-block w-100" src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} />
                  <Carousel.Caption>
                    <h3>{item.title}</h3>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            }
            return null;
          })}
        </Carousel>
        <DisneyCompanies />
        <MoviesContainer title="Popular Movies">
          {popularMovies.map((item) => <MovieCard key={`popular-${item.id}`} image={item.poster_path} alt={item.title} id={item.id} />)}
        </MoviesContainer>
        <MoviesContainer title="Most Rated Movies">
          {mostRatedMovies.map((item) => <MovieCard key={`most-rated-${item.id}`} image={item.poster_path} alt={item.title} id={item.id} />)}
        </MoviesContainer>
        <MoviesContainer title="Upcoming Movies">
          {upcomingMovies.map((item) => <MovieCard key={`upcoming-${item.id}`} image={item.poster_path} alt={item.title} id={item.id} />)}
        </MoviesContainer>
      </div>
    )
  );
}

export default Home;
