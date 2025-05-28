
import React from 'react';
import { useRocketIcon } from '../contexts/RocketIconContext';

interface RocketIconProps {
  isHovered: boolean;
}

const RocketIcon = ({ isHovered }: RocketIconProps) => {
  const { selectedRocket } = useRocketIcon();
  
  const getRocketSrc = () => {
    // For GitHub Pages, we need to include the repository name in the path
    const basePath = import.meta.env.DEV ? '' : '/photo-flow-grid-space';
    switch (selectedRocket) {
      case 'rocket1':
        return `${basePath}/lovable-uploads/20c99586-43f7-4519-be47-d4db741f6478.png`;
      case 'rocket2':
        return `${basePath}/lovable-uploads/34bf07e7-1429-42dd-b959-0952e6318180.png`;
      default:
        return `${basePath}/lovable-uploads/20c99586-43f7-4519-be47-d4db741f6478.png`;
    }
  };

  console.log('RocketIcon - selectedRocket:', selectedRocket);
  console.log('RocketIcon - image path:', getRocketSrc());
  console.log('RocketIcon - env.DEV:', import.meta.env.DEV);
  console.log('RocketIcon - base URL:', import.meta.env.BASE_URL);

  return (
    <img 
      src={getRocketSrc()}
      alt="Rocket"
      style={{ width: '35px', height: '35px' }}
      className="transition-all duration-300 ease-in-out"
      onError={(e) => {
        console.error('Failed to load rocket image:', getRocketSrc());
        console.error('Error event:', e);
        console.error('Current location:', window.location.href);
      }}
    />
  );
};

export default RocketIcon;
