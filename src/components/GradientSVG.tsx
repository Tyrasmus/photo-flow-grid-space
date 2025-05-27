
import React from 'react';

const GradientSVG = () => {
  return (
    <svg 
      className="absolute inset-0 w-full h-full drop-shadow-lg" 
      viewBox="0 0 67 50" 
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
      
      {/* Base gradient path with stroke width 2px - adjusted for reduced height */}
      <path
        d="M33.5 6C43.5 6 50 6.5 54.5 10C59 13.5 59.5 18 59.5 25C59.5 32 59 36.5 54.5 40C50 43.5 43.5 44 33.5 44C23.5 44 17 43.5 12.5 40C8 36.5 7.5 32 7.5 25C7.5 18 8 13.5 12.5 10C17 6.5 23.5 6 33.5 6Z"
        stroke="url(#gradient)"
        strokeWidth="2"
        fill="white"
        className="transition-all duration-300 ease-out hover:fill-gray-100 group-hover:stroke-[4px]"
      />
      
      {/* Overlay magenta path that fades in on hover with animated stroke width */}
      <path
        d="M33.5 6C43.5 6 50 6.5 54.5 10C59 13.5 59.5 18 59.5 25C59.5 32 59 36.5 54.5 40C50 43.5 43.5 44 33.5 44C23.5 44 17 43.5 12.5 40C8 36.5 7.5 32 7.5 25C7.5 18 8 13.5 12.5 10C17 6.5 23.5 6 33.5 6Z"
        stroke="url(#magentaGradient)"
        strokeWidth="2"
        fill="transparent"
        className="transition-all duration-300 ease-out opacity-0 group-hover:opacity-100 group-hover:stroke-[4px]"
      />
    </svg>
  );
};

export default GradientSVG;
