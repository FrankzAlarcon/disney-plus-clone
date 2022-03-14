import { getMovieList } from '../../utils/getMovieList';
import { actionTypes } from './type';

const POPULAR_MOVIES_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=1`;
const MOST_RATED_MOVIES_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=1`;
const UPCOMING_MOVIES_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=1`;
const NOW_PLAYING_MOVIES_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=1`;

export const setPopularMovies = (payload) => ({
  type: actionTypes.setPopularMovies,
  payload,
});
export const setMostRatedMovies = (payload) => ({
  type: actionTypes.setMostRatedMovies,
  payload,
});
export const setUpcomingMovies = (payload) => ({
  type: actionTypes.setUpcomingMovies,
  payload,
});
export const setNowPlayingMovies = (payload) => ({
  type: actionTypes.setNowPlayingMovies,
  payload,
});
export const setIsLoading = (payload) => ({
  type: actionTypes.setIsLoading,
  payload,
});
export const setError = (payload) => ({
  type: actionTypes.setError,
  payload,
});
export const getMovies = () => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    Promise.all([
      getMovieList(POPULAR_MOVIES_URL),
      getMovieList(MOST_RATED_MOVIES_URL),
      getMovieList(UPCOMING_MOVIES_URL),
      getMovieList(NOW_PLAYING_MOVIES_URL),
    ]).then((data) => {
      dispatch(setPopularMovies(data[0].results));
      dispatch(setMostRatedMovies(data[1].results));
      dispatch(setUpcomingMovies(data[2].results));
      dispatch(setNowPlayingMovies(data[3].results));
      dispatch(setIsLoading(false));
    });
  } catch (error) {
    dispatch(setError(error));
    dispatch(setIsLoading(false));
  }
};
