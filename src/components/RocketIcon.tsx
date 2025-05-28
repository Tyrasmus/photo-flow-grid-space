
import React from 'react';

interface RocketIconProps {
  isHovered: boolean;
}

const RocketIcon = ({ isHovered }: RocketIconProps) => {
  return (
    <img 
      src="/lovable-uploads/5014da4a-85e4-4f66-84ac-b3b98a089593.png"
      alt="Rocket"
      className="w-[30px] h-[30px] transition-all duration-300 ease-in-out"
    />
  );
};

export default RocketIcon;
