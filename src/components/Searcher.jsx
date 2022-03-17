import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setValueSearcher, getSearchedMovies } from '@actions/actions';

function Searcher({ image }) {
  const dispatch = useDispatch();
  const { value: searcherValue, filter } = useSelector((state) => state.searcher);
  const getMovies = () => {
    dispatch((getSearchedMovies(searcherValue, filter)));
  };
  return (
    <label htmlFor="searcher">
      <input id="searcher" type="text" placeholder="Type a movie name" onChange={(event) => dispatch(setValueSearcher(event.target.value))} />
      <button type="button" onClick={getMovies}><img src={image} alt="search" /></button>
    </label>
  );
}

export default Searcher;
