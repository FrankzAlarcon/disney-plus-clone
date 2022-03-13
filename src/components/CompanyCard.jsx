import React from 'react';
import '@styles/companyCard.css';

function CompanyCard({ image, alt, video }) {
  return (
    <div className="company-card">
      <img src={image} alt={alt} loading="lazy" />
      <video className="video-company" muted loop playsInline>
        <source src={video} />
      </video>
    </div>
  );
}

export default CompanyCard;
