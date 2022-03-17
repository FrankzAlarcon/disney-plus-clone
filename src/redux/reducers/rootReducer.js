import { combineReducers } from 'redux';
import { getMoviesReducer } from './getMoviesReducer';
import { uiReducer } from './uiReducer';
import { searcherReducer } from './searcherReducer';

export const rootReducer = combineReducers({
  movies: getMoviesReducer,
  ui: uiReducer,
  searcher: searcherReducer,
});
