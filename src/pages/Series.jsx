import React, { useEffect } from 'react';
import MoviesContainer from '@containers/MoviesContainer';
import { useDispatch, useSelector } from 'react-redux';
import { getSeries } from '@actions/actions';
import { MovieCard } from '@components/MovieCard';
import Pagination from '@components/Pagination';
import '@styles/series.css';

function Series() {
  const seriesInfo = useSelector((state) => state.movies.seriesInfo);
  const dispatch = useDispatch();
  useEffect(() => {
    if (Object.keys(seriesInfo).length === 0) {
      dispatch(getSeries(1));
    }
  }, []);
  return (
    <div className="series-page-container">
      <MoviesContainer title="Series">
        {
          seriesInfo.results?.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              alt={movie.original_name}
              image={movie.poster_path}
              firstAirDate={movie.first_air_date}
            />
          ))
        }
      </MoviesContainer>
      <Pagination totalPages={seriesInfo.total_pages} getDataAction={getSeries} />
    </div>
  );
}

export default Series;
