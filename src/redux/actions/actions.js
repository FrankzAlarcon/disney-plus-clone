import { actionTypes } from './type';

export const setPopularMovies = (payload) => ({
  type: actionTypes.setPopularMovies,
  payload,
});

export const setIsLoading = (payload) => ({
  type: actionTypes.setIsLoading,
  payload,
});
