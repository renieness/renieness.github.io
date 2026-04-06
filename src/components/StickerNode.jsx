import React, { useState } from 'react';
import './StickerNode.css';

export default function StickerNode({ data }) {
  const index = data.stickerIndex ?? 0;
  const delay = index * (1.2 / 15); // 15 animated nodes, spread across ~1.2s total
  const [animating, setAnimating] = useState(true);

  return (
    <div
      className={`sticker-node${animating ? ' sticker-stick-in' : ''}`}
      style={{ animationDelay: `${delay}s` }}
      onAnimationEnd={() => setAnimating(false)}
    >
      <img src={data.src} alt={data.alt} className="sticker-image" loading="lazy" />
    </div>
  );
}
