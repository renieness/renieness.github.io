import React from 'react';
import './FloatingContactBar.css';

const PdfIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
    <path d="M6 2C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2H6Z" fill="white" fillOpacity="0.9"/>
    <path d="M14 2V8H20L14 2Z" fill="white" fillOpacity="0.6"/>
    <text x="12" y="17" textAnchor="middle" fontSize="6" fontWeight="bold" fontFamily="sans-serif" fill="#E53935">PDF</text>
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const GmailIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.910 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" fill="white"/>
  </svg>
);

export default function FloatingContactBar() {
  return (
    <div className="floating-contact-bar">
      <a
        href="/2026_AndreeaHrincuCV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-btn contact-btn--pdf"
        aria-label="Download CV (PDF)"
        title="Download CV"
      >
        <PdfIcon />
      </a>
      <a
        href="https://au.linkedin.com/in/andreeahrincu"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-btn contact-btn--linkedin"
        aria-label="LinkedIn profile"
        title="LinkedIn"
      >
        <LinkedInIcon />
      </a>
      <a
        href="mailto:hrincu@gmail.com"
        className="contact-btn contact-btn--gmail"
        aria-label="Send email"
        title="Email me"
      >
        <GmailIcon />
      </a>
    </div>
  );
}
