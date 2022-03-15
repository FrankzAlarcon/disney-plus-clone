import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { getMovieDetails } from '@actions/actions';
import { useParams } from 'react-router-dom';
import playBlackIcon from '@images/play-black.png';
import playWhiteIcon from '@images/play-white.png';
import '@styles/movieDetails.css';
import Button from '@components/Button';

function MovieDetails() {
  const { id } = useParams();
  const movieDetails = useSelector((state) => state.movies.movieDetails);
  const loading = useSelector((state) => state.ui.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovieDetails(id));
  }, []);
  return (
    loading ? (
      <div className="loading">
        <ProgressBar animated now={99} label="99%" style={{ height: '100%', fontSize: '2rem' }} />
      </div>
    ) : (
      <div className="movie-details">
        <img className="movie-details-image" src={`https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`} alt={movieDetails.title} />
        <section className="movie-details-info">
          <p className="hide-title-top movie-details-title">
            {movieDetails.title}
            {' '}
            <span className="movie-details-date">{`(${movieDetails.release_date})`}</span>
          </p>
          <div className="hide-title-top movie-details-genres-container">
            {movieDetails.genres?.map((genre) => <span key={genre.id} className="movie-genre">{genre.name}</span>)}
          </div>
          <div className="hide-title-top movie-details-overview">
            <p>{movieDetails.overview}</p>
          </div>
          <div className="buttons-section">
            <Button text="play" image={playBlackIcon} image2={playWhiteIcon} />
            <Button text="trailers" image={playBlackIcon} image2={playWhiteIcon} />
          </div>
          <p className="hide-title-bottom movie-details-title">
            {movieDetails.title}
            {' '}
            <span className="movie-details-date">{`(${movieDetails.release_date})`}</span>
          </p>
          <div className="hide-title-bottom movie-details-genres-container">
            {movieDetails.genres?.map((genre) => <span key={genre.id} className="movie-genre">{genre.name}</span>)}
          </div>
          <div className="hide-title-bottom movie-details-overview">
            <p>{movieDetails.overview}</p>
          </div>
        </section>
      </div>
    )
  );
}

export default MovieDetails;
