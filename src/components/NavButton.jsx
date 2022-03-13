import React from 'react';
import { Link } from 'react-router-dom';

function NavButton({ image, text, to }) {
  return (
    <Link to={to} className="nav-button dinamyc-underline">
      <img src={image} alt={`button-${text}`} />
      <span>{text}</span>
    </Link>
  );
}

export default NavButton;
