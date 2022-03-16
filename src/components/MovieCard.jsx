import React from 'react';
import { Link } from 'react-router-dom';
import '@styles/movieCarrd.css';

function MovieCard({ image, alt, id }) {
  return (
    <div className="movie-card">
      <Link to={`/details/${id}`}>
        <img src={`https://image.tmdb.org/t/p/original/${image}`} alt={alt} loading="lazy" />
      </Link>
    </div>
  );
}

export { MovieCard };
