
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { LucideIcon } from 'lucide-react';
import SparkleAnimation from './SparkleAnimation';
import GradientSVG from './GradientSVG';
import RocketIcon from './RocketIcon';

interface FloatingActionButtonProps {
  icon: LucideIcon;
  onClick?: () => void;
  className?: string;
}

const FloatingActionButton = ({
  icon: Icon,
  onClick,
  className = ""
}: FloatingActionButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentLayout, setCurrentLayout] = useState(0);

  const handleMouseEnter = () => {
    setIsHovered(true);
    // Randomly select a new layout on each hover (7 different layouts)
    setCurrentLayout(Math.floor(Math.random() * 7));
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className={`fixed bottom-6 right-6 z-10 ${className}`}>
      <div 
        className="relative h-[67px] w-[67px] group"
        style={{
          filter: 'drop-shadow(0 10px 8px rgba(157, 41, 176, 0.15)) drop-shadow(0 4px 3px rgba(73, 76, 216, 0.1)) drop-shadow(0 1px 0px rgba(62, 197, 253, 0.05))'
        }}
      >
        {/* Sparkles around the FAB with current layout */}
        <SparkleAnimation 
          isHovered={isHovered} 
          currentLayout={currentLayout} 
        />

        {/* SVG squircle background with animated gradient transition */}
        <GradientSVG />
        
        {/* Button content with rocket that fills with gradient on hover */}
        <Button 
          className="absolute inset-0 flex items-center justify-center bg-transparent hover:bg-transparent"
          style={{ width: "67px", height: "67px" }}
          size="icon"
          variant="ghost"
          onClick={onClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <RocketIcon isHovered={isHovered} />
        </Button>
      </div>
    </div>
  );
};

export default FloatingActionButton;
