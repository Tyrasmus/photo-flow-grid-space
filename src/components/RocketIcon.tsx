
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
        return "/lovable-uploads/34bf07e7-1429-42dd-b959-0952e6318180.png";
      default:
        return "/lovable-uploads/20c99586-43f7-4519-be47-d4db741f6478.png";
    }
  };

  return (
    <img 
      src={getRocketSrc()}
      alt="Rocket"
      style={{ width: '35px', height: '35px' }}
      className="transition-all duration-300 ease-in-out"
    />
  );
};

export default RocketIcon;
