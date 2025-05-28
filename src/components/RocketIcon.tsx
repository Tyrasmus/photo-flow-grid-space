
import React from 'react';

interface RocketIconProps {
  isHovered: boolean;
}

const RocketIcon = ({ isHovered }: RocketIconProps) => {
  return (
    <img 
      src="/lovable-uploads/49e52502-f53d-414a-9dff-4012214d7758.png"
      alt="Rocket"
      className="w-7 h-7 transition-all duration-300 ease-in-out"
    />
  );
};

export default RocketIcon;
