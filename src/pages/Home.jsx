import React, { useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Placeholder from 'react-bootstrap/Placeholder';
import DisneyCompanies from '@containers/DisneyCompanies';
import { MovieCard } from '@components/MovieCard';
import MoviesContainer from '@containers/MoviesContainer';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '@actions/actions';
import '@styles/home.css';

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies());
  }, []);
  const {
    popularMovies, mostRatedMovies, upcomingMovies, nowPlayingMovies,
  } = useSelector((state) => state.movies);
  const { loading } = useSelector((state) => state.ui);
  return (
    loading ? (
      <>
        <Placeholder as="p" animation="glow">
          <Placeholder xs={12} />
        </Placeholder>
        <Placeholder as="p" animation="glow">
          <Placeholder xs={12} />
        </Placeholder>
        <Placeholder as="p" animation="glow">
          <Placeholder xs={12} />
        </Placeholder>
      </>
    ) : (
      <div className="home">
        <Carousel className="carousel-styles" fade indicators={false}>
          {nowPlayingMovies.map((item, index) => {
            if (index < 4) {
              return (
                <Carousel.Item key={`now-playing-${item.id}`}>
                  <img className="d-block w-100" src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} />
                </Carousel.Item>
              );
            }
            return null;
          })}
        </Carousel>
        <DisneyCompanies />
        <MoviesContainer title="Popular Movies">
          {popularMovies.map((item) => <MovieCard key={`popular-${item.id}`} image={item.poster_path} alt={item.title} />)}
        </MoviesContainer>
        <MoviesContainer title="Most Rated Movies">
          {mostRatedMovies.map((item) => <MovieCard key={`most-rated-${item.id}`} image={item.poster_path} alt={item.title} />)}
        </MoviesContainer>
        <MoviesContainer title="Upcoming Movies">
          {upcomingMovies.map((item) => <MovieCard key={`upcoming-${item.id}`} image={item.poster_path} alt={item.title} />)}
        </MoviesContainer>
      </div>
    )
  );
}

export default Home;
