import { combineReducers } from 'redux';
import { getMoviesReducer } from './getMoviesReducer';
import { uiReducer } from './uiReducer';

export const rootReducer = combineReducers({
  movies: getMoviesReducer,
  ui: uiReducer,
});
