import React from 'react';
import Logo from '@components/Logo';
import homeIcon from '@images/nav/home-icon.svg';
import NavButton from '../components/NavButton';
import '@styles/errorPage.css';

function ErrorPage() {
  return (
    <div className="error-page-container">
      <Logo />
      <NavButton image={homeIcon} text="Back Home" to="/home" />
    </div>
  );
}

export default ErrorPage;
