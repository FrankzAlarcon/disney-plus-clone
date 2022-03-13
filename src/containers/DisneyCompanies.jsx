import React from 'react';
import CompanyCard from '@components/CompanyCard';
import disneyLogo from '@images/logos/logo-disney.png';
import pixarLogo from '@images/logos/pixar-logo.png';
import marvelLogo from '@images/logos/marvel-logo.png';
import nationalLogo from '@images/logos/national-geographic-logo.png';
import starWarsLogo from '@images/logos/starwars-logo.png';
import disneyVideo from '@images/videos/disney-init.mp4';
import pixarVideo from '@images/videos/pixar-init.mp4';
import marvelVideo from '@images/videos/marvel-init.mp4';
import starwarsVideo from '@images/videos/star-wars-init.mp4';
import nationalGeographicVideo from '@images/videos/national-geographic-init.mp4';
import '@styles/disneyCompanies.css';

function DisneyCompanies() {
  return (
    <div className="companies">
      <CompanyCard image={disneyLogo} video={disneyVideo} />
      <CompanyCard image={pixarLogo} video={pixarVideo} />
      <CompanyCard image={marvelLogo} video={marvelVideo} />
      <CompanyCard image={nationalLogo} video={starwarsVideo} />
      <CompanyCard image={starWarsLogo} video={nationalGeographicVideo} />
    </div>
  );
}

export default DisneyCompanies;
