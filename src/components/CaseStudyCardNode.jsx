import React, { useState } from 'react';
import './CaseStudyCardNode.css';

export default function CaseStudyCardNode({ data }) {
  const index = data.stickerIndex ?? 0;
  const delay = index * (1.2 / 15); // spread across ~1.2s total
  const [animating, setAnimating] = useState(true);

  const handleClick = (e) => {
    e.stopPropagation();
    window.location.href = data.href;
  };

  return (
    <div
      className={`case-study-card${animating ? ' case-study-stick-in' : ''}`}
      style={{ '--rotation': `${data.rotation ?? 0}deg`, animationDelay: `${delay}s` }}
      onClick={handleClick}
      onAnimationEnd={() => setAnimating(false)}
    >
      <img
        src={data.thumb}
        alt={data.title}
        className="case-study-thumb"
        loading="lazy"
      />
    </div>
  );
}
