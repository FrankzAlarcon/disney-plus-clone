import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MoviesContainer from '@containers/MoviesContainer';
import { getNowPlayingMovies } from '@actions/actions';
import { MovieCard } from '@components/MovieCard';
import Pagination from '../components/Pagination';
import '@styles/movies.css';

function Movies() {
  const moviesInfo = useSelector((state) => state.movies.moviesInfo);
  const dispatch = useDispatch();
  useEffect(() => {
    if (Object.keys(moviesInfo).length === 0) {
      dispatch(getNowPlayingMovies(1));
    }
  }, []);
  return (
    <div className="movies-page-container">
      <MoviesContainer title="Movies">
        {
          moviesInfo.results?.map((movie) => (
            <MovieCard key={movie.id} id={movie.id} alt={movie.title} image={movie.poster_path} />
          ))
        }
      </MoviesContainer>
      <Pagination totalPages={moviesInfo.total_pages} />
    </div>
  );
}

export default Movies;
