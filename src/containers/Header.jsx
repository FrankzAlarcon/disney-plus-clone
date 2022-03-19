import React from 'react';
import { Link } from 'react-router-dom';
import NavButton from '@components/NavButton';
import homeIcon from '@images/nav/home-icon.svg';
import searchIcon from '@images/nav/search-icon.svg';
// import watchListIcon from '@images/nav/watchlist-icon.svg';
import seriesIcon from '@images/nav/series-icon.svg';
import moviesIcon from '@images/nav/movie-icon.svg';
// import originalsIcon from '@images/nav/original-icon.svg';
import logoDisney from '@images/logos/logo-disney.svg';
import '@styles/header.css';

function Header() {
  return (
    <header className="header">
      <Link to="/home">
        <div className="logo">
          <img src={logoDisney} alt="logo-disney" />
        </div>
      </Link>
      <nav className="nav-bar">
        <NavButton text="home" image={homeIcon} to="/home" />
        <NavButton text="search" image={searchIcon} to="/search" />
        <NavButton text="movies" image={moviesIcon} to="/movies" />
        <NavButton text="series" image={seriesIcon} to="/series" />
        {/* <div className="hide">
          <NavButton text="originals" image={originalsIcon} to="/originals" />
          <NavButton text="watch list" image={watchListIcon} to="/watch-list" />
        </div> */}
      </nav>
    </header>
  );
}

export default Header;
