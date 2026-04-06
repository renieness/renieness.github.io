import React, { useState } from 'react';
import './AboutCardNode.css';

export default function AboutCardNode({ data }) {
  const index = data.stickerIndex ?? 0;
  const delay = index * (1.2 / 15);
  const [animating, setAnimating] = useState(true);

  const handleClick = (e) => {
    e.stopPropagation();
    window.location.href = '/about';
  };

  return (
    <div
      className={`about-card-node${animating ? ' about-card-stick-in' : ''}`}
      style={{ '--rotation': `${data.rotation ?? -5}deg`, animationDelay: `${delay}s` }}
      onClick={handleClick}
      onAnimationEnd={() => setAnimating(false)}
    >
      <p className="about-card-title">Nice to see you!</p>
      <div className="about-card-photo-wrapper">
        {data.photo ? (
          <img src={data.photo} alt={data.photoAlt || 'Photo'} className="about-card-photo" />
        ) : (
          <div className="about-card-photo-placeholder" />
        )}
      </div>
      <p className="about-card-link">Find out more about me</p>
    </div>
  );
}
