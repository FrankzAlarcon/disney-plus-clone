import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { getMovieDetails, getTrailersMovie, setTrailersMovie } from '@actions/actions';
import { useParams } from 'react-router-dom';
import playBlackIcon from '@images/play-black.png';
import playWhiteIcon from '@images/play-white.png';
import '@styles/movieDetails.css';
import Button from '@components/Button';
import Video from '../components/Video';

function MovieDetails() {
  const { id } = useParams();
  const { movieDetails, trailersMovie } = useSelector((state) => state.movies);
  const { loading, loadingTrailers } = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTrailersMovie([]));
    dispatch(getMovieDetails(id));
  }, []);
  const showTrailers = (movieId) => {
    dispatch(getTrailersMovie(movieId));
  };
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
            <Button text="play" image={playBlackIcon} image2={playWhiteIcon} onClick={() => showTrailers(id)} />
            <Button text="trailers" image={playBlackIcon} image2={playWhiteIcon} onClick={() => showTrailers(id)} />
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
        {!loadingTrailers
            && (
            <div className="videos-container">
              {trailersMovie
                .map((trailer) => (
                  <Video
                    key={trailer.id}
                    video={trailer.key}
                    title={trailer.name}
                  />
                ))}
            </div>
            )}
      </div>
    )
  );
}

export default MovieDetails;
