
import React from 'react';
import { Rocket } from 'lucide-react';

interface RocketIconProps {
  isHovered: boolean;
}

const RocketIcon = ({ isHovered }: RocketIconProps) => {
  return (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="rocketGradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#E60FEF" />
          <stop offset="33%" stopColor="#9D29B0" />
          <stop offset="67%" stopColor="#494CD8" />
          <stop offset="100%" stopColor="#3EC5FD" />
        </linearGradient>
      </defs>
      <Rocket 
        className={`transition-all duration-300 ease-in-out ${
          isHovered ? 'text-transparent' : 'text-transparent'
        }`}
        strokeWidth={2}
        fill={isHovered ? '#9D29B0' : 'none'}
        stroke={isHovered ? '#9D29B0' : '#9D29B0'}
      />
    </svg>
  );
};

export default RocketIcon;
