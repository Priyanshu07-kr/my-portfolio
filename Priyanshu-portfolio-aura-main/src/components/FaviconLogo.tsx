import React from 'react';

const FaviconLogo: React.FC = () => {
  return (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="faviconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="50%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#0891b2" />
        </linearGradient>
      </defs>
      <circle cx="16" cy="16" r="15" fill="url(#faviconGradient)" stroke="#0e7490" strokeWidth="1" />
      <text x="16" y="21" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#FFFFFF" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>P</text>
      <circle cx="24" cy="8" r="1" fill="rgba(255,255,255,0.8)" />
    </svg>
  );
};

export default FaviconLogo;
