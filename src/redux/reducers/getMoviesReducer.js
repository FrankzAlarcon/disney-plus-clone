import { actionTypes } from '../actions/type';

const initialState = {
  popularMovies: [],
  mostRatedMovies: [],
  upcomingMovies: [],
  nowPlayingMovies: [],
  movieDetails: [],
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
    default: return { ...state };
  }
};
