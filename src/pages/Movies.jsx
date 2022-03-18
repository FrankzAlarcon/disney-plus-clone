import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MoviesContainer from '../containers/MoviesContainer';
import { getNowPlayingMovies } from '../redux/actions/actions';

function Movies() {
  const nowPlayingMovies = useSelector((state) => state.movies.nowPlayingMovies);
  const dispatch = useDispatch();
  useEffect(() => {
    if (nowPlayingMovies.length === 0) {
      dispatch(getNowPlayingMovies(1));
    }
  }, []);
  return (
    <div className="movies-page-container">
      <MoviesContainer title="Movies" />
    </div>
  );
}

export default Movies;
