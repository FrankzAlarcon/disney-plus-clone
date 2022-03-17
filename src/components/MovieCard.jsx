import React from 'react';
import { Link } from 'react-router-dom';
import ImageNotFound from '@images/NoImagePlaceholder.png';
import '@styles/movieCarrd.css';

function MovieCard({
  image, alt, id, firstAirDate,
}) {
  return (
    <div className="movie-card">
      <Link to={!firstAirDate ? `/details/movie/${id}` : `/details/serie/${id}`}>
        <img src={image ? `https://image.tmdb.org/t/p/original/${image}` : ImageNotFound} alt={alt} loading="lazy" />
      </Link>
    </div>
  );
}

export { MovieCard };
