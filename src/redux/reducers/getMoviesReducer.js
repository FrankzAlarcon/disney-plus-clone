import { actionTypes } from '../actions/type';

const initialState = {
  popularMovies: [],
  mostRatedMovies: [],
  upcomingMovies: [],
  nowPlayingMovies: [],
  movieDetails: {},
  trailersMovie: [],
  moviesSearched: [],
  moviesInfo: {},
};

export const getMoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.setPopularMovies:
      return { ...state, popularMovies: [...action.payload] };
    case actionTypes.setMostRatedMovies:
      return { ...state, mostRatedMovies: [...action.payload] };
    case actionTypes.setUpcomingMovies:
      return { ...state, upcomingMovies: [...action.payload] };
    case actionTypes.setNowPlayingMovies:
      return { ...state, nowPlayingMovies: [...action.payload] };
    case actionTypes.setMovieDetails:
      return { ...state, movieDetails: { ...action.payload } };
    case actionTypes.setTrailersMovie:
      return { ...state, trailersMovie: [...action.payload] };
    case actionTypes.setMoviesSearched:
      return { ...state, moviesSearched: [...action.payload] };
    case actionTypes.setMovies:
      return { ...state, moviesInfo: { ...action.payload } };
    default: return { ...state };
  }
};
