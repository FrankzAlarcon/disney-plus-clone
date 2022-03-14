import React from 'react';
import '@styles/companyCard.css';

function CompanyCard({ image, alt, video }) {
  const onHover = (event) => {
    const node = event.target.nodeName;
    if (node === 'DIV') {
      const videoNode = event.target.childNodes[1];
      videoNode.play();
      videoNode.style.opacity = 1;
    } if (node === 'IMG') {
      const videoNode = event.target.nextSibling;
      videoNode.play();
      videoNode.style.opacity = 1;
    }
  };
  const onLeave = (event) => {
    const node = event.target.nodeName;
    if (node === 'DIV') {
      const videoNode = event.target.childNodes[1];
      videoNode.pause();
      videoNode.currentTime = 0;
      videoNode.style.opacity = 0;
    } if (node === 'IMG') {
      const videoNode = event.target.nextSibling;
      videoNode.pause();
      videoNode.currentTime = 0;
      videoNode.style.opacity = 0;
    }
  };
  return (
    <div
      className="company-card"
      onMouseEnter={(event) => onHover(event)}
      onMouseLeave={(event) => onLeave(event)}
    >
      <img src={image} alt={alt} loading="lazy" />
      <video className="video-company" muted loop playsInline>
        <source src={video} />
      </video>
    </div>
  );
}

export default CompanyCard;
