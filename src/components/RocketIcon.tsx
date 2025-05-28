
import React from 'react';

interface RocketIconProps {
  isHovered: boolean;
}

const RocketIcon = ({ isHovered }: RocketIconProps) => {
  return (
    <img 
      src="/lovable-uploads/20c99586-43f7-4519-be47-d4db741f6478.png"
      alt="Rocket"
      className="w-[35px] h-[35px] transition-all duration-300 ease-in-out"
    />
  );
};

export default RocketIcon;
