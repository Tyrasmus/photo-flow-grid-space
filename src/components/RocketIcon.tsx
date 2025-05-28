
import React from 'react';
import { useRocketIcon } from '../contexts/RocketIconContext';

interface RocketIconProps {
  isHovered: boolean;
}

const RocketIcon = ({ isHovered }: RocketIconProps) => {
  const { selectedRocket } = useRocketIcon();
  
  const getRocketSrc = () => {
    switch (selectedRocket) {
      case 'rocket1':
        return "/lovable-uploads/20c99586-43f7-4519-be47-d4db741f6478.png";
      case 'rocket2':
        return "/lovable-uploads/49e52502-f53d-414a-9dff-4012214d7758.png"; // placeholder for rocket 2
      default:
        return "/lovable-uploads/20c99586-43f7-4519-be47-d4db741f6478.png";
    }
  };

  return (
    <img 
      src={getRocketSrc()}
      alt="Rocket"
      className="w-[35px] h-[35px] transition-all duration-300 ease-in-out"
    />
  );
};

export default RocketIcon;
