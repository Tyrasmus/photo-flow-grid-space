
import React from 'react';

interface RocketIconProps {
  isHovered: boolean;
}

const RocketIcon = ({ isHovered }: RocketIconProps) => {
  return (
    <div className="w-8 h-8 flex items-center justify-center">
      <img 
        src="/lovable-uploads/917e2de7-1508-492b-ba7f-6e8a09c54bf4.png"
        alt="Rocket"
        className={`w-5 h-5 object-contain transition-all duration-300 ease-in-out ${
          isHovered ? 'scale-110' : 'scale-100'
        }`}
      />
    </div>
  );
};

export default RocketIcon;
