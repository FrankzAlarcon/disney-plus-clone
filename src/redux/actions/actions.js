import { getMovieList } from '../../utils/getMovieList';
import { actionTypes } from './type';

const POPULAR_MOVIES_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=1`;
const MOST_RATED_MOVIES_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=1`;
const UPCOMING_MOVIES_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=1`;
const NOW_PLAYING_MOVIES_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=1`;
const MOVIE_DETAILS = (id) => `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`;
const TRAILERS_MOVIE = (id) => `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`;
const TV_SHOW_DETAILS = (id) => `https://api.themoviedb.org/3/tv/${id}?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`;
const TRAILERS_TV_SHOW = (id) => `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`;
const SEARCHED_ALL = (query, page = 1) => `https://api.themoviedb.org/3/search/multi?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`;
const SEARCHED_MOVIES = (query) => `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;
const SEARCHED_TV_SHOWS = (query) => `https://api.themoviedb.org/3/search/tv?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=1&query=${query}&include_adult=false`;

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
export const setMovieDetails = (payload) => ({
  type: actionTypes.setMovieDetails,
  payload,
});
export const setTrailersMovie = (payload) => ({
  type: actionTypes.setTrailersMovie,
  payload,
});
export const setMoviesSearched = (payload) => ({
  type: actionTypes.setMoviesSearched,
  payload,
});
export const setIsLoading = (payload) => ({
  type: actionTypes.setIsLoading,
  payload,
});
export const setLoadingTrailers = (payload) => ({
  type: actionTypes.setLoadingTrailers,
  payload,
});
export const setError = (payload) => ({
  type: actionTypes.setError,
  payload,
});
export const setShowData = (payload) => ({
  type: actionTypes.setShowData,
  payload,
});
export const setValueSearcher = (payload) => ({
  type: actionTypes.setValueSearcher,
  payload,
});
export const setFilter = (payload) => ({
  type: actionTypes.setFilter,
  payload,
});

// Asynchronous actions
export const getMovies = () => (dispatch) => {
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

export const getPopularMovies = () => (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    getMovieList(POPULAR_MOVIES_URL)
      .then((data) => {
        dispatch(setPopularMovies(data.results));
        dispatch(setIsLoading(false));
      });
  } catch (error) {
    dispatch(setError(error));
    dispatch(setIsLoading(false));
  }
};

export const getMovieDetails = (id) => (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    getMovieList(MOVIE_DETAILS(id))
      .then((data) => {
        dispatch(setMovieDetails(data));
        dispatch(setIsLoading(false));
      });
  } catch (error) {
    dispatch(setError(error));
    dispatch(setIsLoading(false));
  }
};
export const getSerieDetail = (id) => (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    getMovieList(TV_SHOW_DETAILS(id))
      .then((data) => {
        dispatch(setMovieDetails(data));
        dispatch(setIsLoading(false));
      });
  } catch (error) {
    dispatch(setError(error));
    dispatch(setIsLoading(false));
  }
};

export const getTrailersMovie = (id) => (dispatch) => {
  try {
    // dispatch(setLoadingTrailers(true));
    getMovieList(TRAILERS_MOVIE(id))
      .then((data) => {
        dispatch(setTrailersMovie(data.results));
        // dispatch(setLoadingTrailers(false));
        dispatch(setShowData(true));
      });
  } catch (error) {
    dispatch(setError(error));
    // dispatch(setLoadingTrailers(false));
  }
};
export const getTrailersTvShow = (id) => (dispatch) => {
  try {
    getMovieList(TRAILERS_TV_SHOW(id))
      .then((data) => {
        dispatch(setTrailersMovie(data.results));
        dispatch(setShowData(true));
      });
  } catch (error) {
    dispatch(setError(error));
  }
};
export const getSearchedMovies = (query, filter) => (dispatch) => {
  try {
    if (query) {
      const queryAdapted = query.split(' ').join('%20');
      let searcherFunction = SEARCHED_ALL;
      if (filter === 'all') {
        searcherFunction = SEARCHED_ALL;
      } else if (filter === 'only-series') {
        searcherFunction = SEARCHED_TV_SHOWS;
      } else if (filter === 'only-movies') {
        searcherFunction = SEARCHED_MOVIES;
      }
      // console.log(searcherFunction);
      getMovieList(searcherFunction(queryAdapted))
        .then((data) => {
          dispatch(setMoviesSearched(data.results));
          dispatch(setShowData(true));
        });
    } else {
      dispatch(setMoviesSearched([]));
    }
  } catch (error) {
    dispatch(setError(error));
    dispatch(setShowData(false));
  }
};
