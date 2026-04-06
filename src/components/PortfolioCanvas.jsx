import React from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  useNodesState,
  useEdgesState,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import StickerNode from './StickerNode';
import HeadingNode from './HeadingNode';
import AboutCardNode from './AboutCardNode';
import CaseStudyCardNode from './CaseStudyCardNode';
import layout from '../data/canvasLayout.json';
import './PortfolioCanvas.css';

// Import sticker images
import cs1 from '../assets/cs_1.png';
import cs2 from '../assets/cs_2.png';
import cs3 from '../assets/cs_3.png';
import stickerBigBen from '../assets/sticker_big_ben.png';
import stickerGym from '../assets/sticker_gym.png';
import stickerLaptop from '../assets/sticker_laptop.png';
import stickerOperaHouse from '../assets/sticker_opera_house.png';
import stickerPlant from '../assets/sticker_plant.png';
import stickerReading from '../assets/sticker_reading.png';
import stickerRoo from '../assets/sticker_roo.png';
import stickerSun from '../assets/sticker_sun.png';
import mePhoto from '../assets/me.png';
import thumbFeatureGate from '../assets/feature_gate_thumb.png';
import thumbAppUsage from '../assets/app_usage_thumb.png';
import thumbUno from '../assets/uno_thumb.png';

const nodeTypes = {
  sticker: StickerNode,
  heading: HeadingNode,
  aboutCard: AboutCardNode,
  caseStudyCard: CaseStudyCardNode,
};

export default function PortfolioCanvas() {
  const stickers = [
    { id: 'sticker_big_ben',     src: stickerBigBen.src,    alt: 'Big Ben'     },
    { id: 'sticker_gym',         src: stickerGym.src,        alt: 'Gym'         },
    { id: 'sticker_laptop',      src: stickerLaptop.src,     alt: 'Laptop'      },
    { id: 'sticker_opera_house', src: stickerOperaHouse.src, alt: 'Opera House' },
    { id: 'sticker_plant',       src: stickerPlant.src,      alt: 'Plant'       },
    { id: 'sticker_reading',     src: stickerReading.src,    alt: 'Reading'     },
    { id: 'sticker_roo',         src: stickerRoo.src,        alt: 'Kangaroo'    },
    { id: 'sticker_sun',         src: stickerSun.src,        alt: 'Sun'         },
  ];

  const initialNodes = [
    {
      id: 'heading',
      data: {
        title: 'Hi, I\'m Andreea',
        subtitle: 'Creative UX Designer | Problem Solver | Design Enthusiast',
      },
      position: { x: layout.heading.x, y: layout.heading.y },
      type: 'heading',
      draggable: false,
    },
    {
      id: 'about-card',
      data: { photo: mePhoto.src, photoAlt: 'Andreea', rotation: layout.me.rotation },
      position: { x: layout.me.x, y: layout.me.y },
      type: 'aboutCard',
      draggable: layout.me.draggable,
    },
    {
      id: 'case-study-feature-gate',
      data: {
        thumb: thumbFeatureGate.src,
        title: 'Feature Gate',
        color: '#65d97d',
        href: '/case-studies/feature-gate',
        rotation: layout.caseStudies['feature_gate_thumb'].rotation,
      },
      position: { x: layout.caseStudies['feature_gate_thumb'].x, y: layout.caseStudies['feature_gate_thumb'].y },
      type: 'caseStudyCard',
      draggable: layout.caseStudies['feature_gate_thumb'].draggable,
    },
    {
      id: 'case-study-app-usage',
      data: {
        thumb: thumbAppUsage.src,
        title: 'App Usage',
        color: '#b57bee',
        href: '/case-studies/app-usage',
        rotation: layout.caseStudies['app_usage_thumb'].rotation,
      },
      position: { x: layout.caseStudies['app_usage_thumb'].x, y: layout.caseStudies['app_usage_thumb'].y },
      type: 'caseStudyCard',
      draggable: layout.caseStudies['app_usage_thumb'].draggable,
    },
    {
      id: 'case-study-uno',
      data: {
        thumb: thumbUno.src,
        title: 'Uno',
        color: '#f5c842',
        href: '/case-studies/uno',
        rotation: layout.caseStudies['uno_thumb'].rotation,
      },
      position: { x: layout.caseStudies['uno_thumb'].x, y: layout.caseStudies['uno_thumb'].y },
      type: 'caseStudyCard',
      draggable: layout.caseStudies['uno_thumb'].draggable,
    },
    ...stickers.map((sticker) => ({
      id: sticker.id,
      data: { src: sticker.src, alt: sticker.alt, stickerId: sticker.id },
      position: { x: layout.stickers[sticker.id].x, y: layout.stickers[sticker.id].y },
      type: 'sticker',
      draggable: layout.stickers[sticker.id].draggable,
    })),
    { id: 'cs_1', data: { src: cs1.src, alt: 'Case study label 1' }, position: { x: layout.caseStudyStickers.cs_1.x, y: layout.caseStudyStickers.cs_1.y }, type: 'sticker', draggable: layout.caseStudyStickers.cs_1.draggable },
    { id: 'cs_2', data: { src: cs2.src, alt: 'Case study label 2' }, position: { x: layout.caseStudyStickers.cs_2.x, y: layout.caseStudyStickers.cs_2.y }, type: 'sticker', draggable: layout.caseStudyStickers.cs_2.draggable },
    { id: 'cs_3', data: { src: cs3.src, alt: 'Case study label 3' }, position: { x: layout.caseStudyStickers.cs_3.x, y: layout.caseStudyStickers.cs_3.y }, type: 'sticker', draggable: layout.caseStudyStickers.cs_3.draggable },
  ];

  // Assign stickerIndex by x-position (left → right) for staggered animation
  const animatedTypes = new Set(['sticker', 'caseStudyCard', 'aboutCard']);
  const animatedNodes = initialNodes.filter((n) => animatedTypes.has(n.type));
  const sortedIds = animatedNodes
    .slice()
    .sort((a, b) => a.position.x - b.position.x)
    .map((n) => n.id);
  const stickerOrder = Object.fromEntries(sortedIds.map((id, i) => [id, i]));
  for (const node of initialNodes) {
    if (animatedTypes.has(node.type)) {
      node.data.stickerIndex = stickerOrder[node.id];
    }
  }

  const initialEdges = [];

  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div className="portfolio-canvas-container">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background variant="dots" gap={30} size={1} color="#8a8a8a" />
        <Controls />
      </ReactFlow>
    </div>
  );
}
