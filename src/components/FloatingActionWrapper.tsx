
import React, { useState } from 'react';
import { LucideIcon } from 'lucide-react';
import FloatingActionButton from './FloatingActionButton';
import FloatingActionMenu from './FloatingActionMenu';

interface FloatingActionWrapperProps {
  icon: LucideIcon;
  onClick?: () => void;
  className?: string;
}

const FloatingActionWrapper = ({
  icon,
  onClick,
  className = ""
}: FloatingActionWrapperProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleFabClick = () => {
    setIsMenuOpen(true);
    if (onClick) onClick();
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {!isMenuOpen && (
        <FloatingActionButton 
          icon={icon}
          onClick={handleFabClick}
          className={className}
        />
      )}
      
      <FloatingActionMenu 
        isOpen={isMenuOpen}
        onClose={handleCloseMenu}
        className={className}
      />
    </>
  );
};

export default FloatingActionWrapper;
