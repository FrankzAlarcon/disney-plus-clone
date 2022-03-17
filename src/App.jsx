import React from 'react';
import {
  Route, Routes, BrowserRouter, Navigate,
} from 'react-router-dom';
import Home from '@pages/Home';
import ErrorPage from '@pages/ErrorPage';
import Movies from '@pages/Movies';
import Originals from '@pages/Originals';
import Series from '@pages/Series';
import WatchList from '@pages/WatchList';
import MovieDetails from '@pages/MovieDetails';
import Header from '@containers/Header';
import Search from '@pages/Search';
import SerieDetails from '@pages/SerieDetails';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Navigate to="/home" />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/details/movie/:id" element={<MovieDetails />} />
        <Route exact path="/details/serie/:id" element={<SerieDetails />} />
        <Route exact path="/movies" element={<Movies />} />
        <Route exact path="/originals" element={<Originals />} />
        <Route exact path="/series" element={<Series />} />
        <Route exact path="/watch-list" element={<WatchList />} />
        <Route exact path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
