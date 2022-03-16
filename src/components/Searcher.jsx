import React from 'react';

function Searcher({ image }) {
  return (
    <label htmlFor="searcher">
      <input id="searcher" type="text" placeholder="Type a movie name" />
      <button type="button"><img src={image} alt="search" /></button>
    </label>
  );
}

export default Searcher;
