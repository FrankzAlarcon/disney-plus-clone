import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import DisneyCompanies from '@containers/DisneyCompanies';
import { MovieCard } from '@components/MovieCard';
import MoviesContainer from '@containers/MoviesContainer';
import { useDispatch } from 'react-redux';
import { setIsLoading } from '../redux/actions/actions';
import '@styles/home.css';

function Home() {
  const array = new Array(4).fill('');
  const array2 = new Array(20).fill('');
  const dispatch = useDispatch();
  dispatch(setIsLoading(true));
  return (
    <div className="home">
      <Carousel className="carousel-styles" fade indicators={false}>
        {array.map((item, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100" src="https://via.placeholder.com/300x150" alt="First slide" />
          </Carousel.Item>
        ))}
      </Carousel>
      <DisneyCompanies />
      <MoviesContainer title="Estrenos">
        {array2.map((item, index) => <MovieCard key={index} />)}
      </MoviesContainer>
      <MoviesContainer title="Populares">
        {array2.map((item, index) => <MovieCard key={index} />)}
      </MoviesContainer>
      <MoviesContainer title="rated">
        {array2.map((item, index) => <MovieCard key={index} />)}
      </MoviesContainer>
    </div>
  );
}

export default Home;
