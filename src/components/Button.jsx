import React, { useState } from 'react';
import '@styles/button.css';

function Button({
  text, image, image2, onClick,
}) {
  const [isHover, setIsHover] = useState(false);
  const onHover = () => {
    setIsHover(!isHover);
  };
  return (
    <button className="details-button" type="button" onMouseEnter={onHover} onMouseLeave={onHover} onClick={onClick}>
      <img className="details-button-image" src={isHover ? image : image2} alt={text} />
      <span className="details-button-text">{text}</span>
    </button>
  );
}

export default Button;
