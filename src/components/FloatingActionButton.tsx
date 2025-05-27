
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
    // Randomly select a new layout on each hover (10 different layouts)
    setCurrentLayout(Math.floor(Math.random() * 10));
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className={`fixed bottom-6 right-6 z-10 ${className}`}>
      <div 
        className="relative h-[67px] w-[67px] group transition-all duration-300 ease-out"
        style={{
          filter: isHovered 
            ? 'drop-shadow(0 20px 32px rgba(157, 41, 176, 0.48)) drop-shadow(0 10px 16px rgba(73, 76, 216, 0.36)) drop-shadow(0 5px 10px rgba(62, 197, 253, 0.24))'
            : 'drop-shadow(0 16px 20px rgba(157, 41, 176, 0.32)) drop-shadow(0 8px 8px rgba(73, 76, 216, 0.24)) drop-shadow(0 3px 5px rgba(62, 197, 253, 0.16))'
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
          className="absolute inset-0 flex items-center justify-center bg-transparent hover:bg-transparent p-0"
          style={{ width: "67px", height: "67px" }}
          size="icon"
          variant="ghost"
          onClick={onClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="w-10 h-10 flex items-center justify-center">
            <RocketIcon isHovered={isHovered} />
          </div>
        </Button>
      </div>
    </div>
  );
};

export default FloatingActionButton;
