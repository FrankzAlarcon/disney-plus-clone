import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '@styles/movieCarrd.css';

function MovieCard() {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    const getMovie = async () => {
      await fetch(`https://api.themoviedb.org/3/movie/155?api_key=${import.meta.env.VITE_API_KEY}`)
        .then((response) => response.json())
        .then((data) => setMovie(data));
    };
    getMovie();
  }, []);
  // console.log('movie data', movie);
  return (
    <div className="movie-card">
      <Link to={`details/${0}`}>
        <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="movie" loading="lazy" />
      </Link>
    </div>
  );
}

export { MovieCard };
