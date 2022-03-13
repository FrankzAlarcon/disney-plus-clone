import React from 'react';
import '@styles/moviesContainer.css';

function MoviesContainer({ title, children }) {
  return (
    <div className="movies-container">
      <p>{title}</p>
      <div className="movies">
        {children}
      </div>
    </div>
  );
}

export default MoviesContainer;
