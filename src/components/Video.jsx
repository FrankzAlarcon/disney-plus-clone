import React from 'react';
import '@styles/video.css';

function Video({ video, title }) {
  return (
    <div className="video-container">
      <p>{title}</p>
      <iframe title={title} src={`https://www.youtube.com/embed/${video}`} />
    </div>
  );
}

export default Video;
