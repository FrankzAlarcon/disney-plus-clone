import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPopularMovies } from '@actions/actions';
import { MovieCard } from '@components/MovieCard';
import ProgressBar from 'react-bootstrap/ProgressBar';
import SearchContainer from '@containers/SearchContainer';
import MoviesContainer from '@containers/MoviesContainer';

function Search() {
  const { popularMovies, moviesSearched } = useSelector((state) => state.movies);
  const { loading, showData } = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  useEffect(() => {
    if (popularMovies.length === 0) {
      dispatch(getPopularMovies());
    }
  }, []);
  return (
    loading ? (
      <div className="loading">
        <ProgressBar animated now={99} label="99%" style={{ height: '100%', fontSize: '2rem' }} />
      </div>
    ) : (
      <>
        <SearchContainer />
        <div className="movies-container">
          {
            showData && (
              <MoviesContainer title="popular movies">
                {
                moviesSearched.map((item) => (
                  <MovieCard key={item.id} image={item.poster_path} alt={item.title} id={item.id} />
                ))
                }
              </MoviesContainer>
            )
          }
          <MoviesContainer title="popular movies">
            {
              popularMovies.map((item) => (
                <MovieCard key={item.id} image={item.poster_path} alt={item.title} id={item.id} />
              ))
            }
          </MoviesContainer>
        </div>
      </>
    )
  );
}

export default Search;
