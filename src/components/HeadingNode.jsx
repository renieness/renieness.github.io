import React from 'react';
import './HeadingNode.css';

export default function HeadingNode({ data }) {
  return (
    <div className="heading-node">
      <h1 className="heading-title">
        Hi, I'm <span className="heading-name">Andreea</span>
      </h1>
      <p className="heading-subtitle">{data.subtitle}</p>
    </div>
  );
}
