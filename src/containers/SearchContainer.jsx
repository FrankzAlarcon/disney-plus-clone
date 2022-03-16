import React from 'react';
import Searcher from '@components/Searcher';
import searchIcon from '@images/nav/search-icon.svg';
import Filter from '@components/Filter';
import '@styles/search.css';

function SearchContainer() {
  return (
    <div className="search-container">
      <Searcher image={searchIcon} />
      <p>Filters</p>
      <Filter id="all" text="All" />
      <Filter id="only-movies" text="Only Movies" />
      <Filter id="only-series" text="Only Series" />
    </div>
  );
}

export default SearchContainer;
