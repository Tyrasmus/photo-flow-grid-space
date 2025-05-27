
import React from 'react';

const GradientSVG = () => {
  return (
    <svg 
      className="absolute inset-0 w-full h-full drop-shadow-lg" 
      viewBox="0 0 67 67" 
      fill="none"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Define gradients */}
      <defs>
        <linearGradient id="gradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#E60FEF" />
          <stop offset="33%" stopColor="#9D29B0" />
          <stop offset="67%" stopColor="#494CD8" />
          <stop offset="100%" stopColor="#3EC5FD" />
        </linearGradient>
        <linearGradient id="magentaGradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#9D29B0" />
          <stop offset="100%" stopColor="#9D29B0" />
        </linearGradient>
      </defs>
      
      {/* Base gradient path with stroke width 2px */}
      <path
        d="M33.5 8C43.5 8 50 8.5 54.5 13C59 17.5 59.5 24 59.5 33.5C59.5 43 59 49.5 54.5 54C50 58.5 43.5 59 33.5 59C23.5 59 17 58.5 12.5 54C8 49.5 7.5 43 7.5 33.5C7.5 24 8 17.5 12.5 13C17 8.5 23.5 8 33.5 8Z"
        stroke="url(#gradient)"
        strokeWidth="2"
        fill="white"
        className="transition-all duration-300 ease-out hover:fill-gray-100 group-hover:stroke-[2px]"
      />
      
      {/* Overlay magenta path that fades in on hover with animated stroke width */}
      <path
        d="M33.5 8C43.5 8 50 8.5 54.5 13C59 17.5 59.5 24 59.5 33.5C59.5 43 59 49.5 54.5 54C50 58.5 43.5 59 33.5 59C23.5 59 17 58.5 12.5 54C8 49.5 7.5 43 7.5 33.5C7.5 24 8 17.5 12.5 13C17 8.5 23.5 8 33.5 8Z"
        stroke="url(#magentaGradient)"
        strokeWidth="2"
        fill="transparent"
        className="transition-all duration-300 ease-out opacity-0 group-hover:opacity-100 group-hover:stroke-[2px]"
      />
    </svg>
  );
};

export default GradientSVG;
