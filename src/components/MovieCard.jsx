import React from 'react';
import { Link } from 'react-router-dom';
import '@styles/movieCarrd.css';

function MovieCard({ image, alt }) {
  return (
    <div className="movie-card">
      <Link to={`details/${0}`}>
        <img src={`https://image.tmdb.org/t/p/original/${image}`} alt={alt} loading="lazy" />
      </Link>
    </div>
  );
}

export { MovieCard };
