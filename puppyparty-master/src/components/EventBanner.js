import React from 'react';

const EventBanner = ({ bgImage, title, description, buttonText, link }) => {
  return (
    <div className="event-banner" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="overlay">
        <div className="content">
          <h3>{title}</h3>
          <p>{description}</p>
          <a href={link} target="_blank" rel="noopener noreferrer">{buttonText}</a>
        </div>
      </div>
    </div>
  );
};

export default EventBanner;
