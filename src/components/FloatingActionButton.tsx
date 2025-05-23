
import React from 'react';
import { Button } from "@/components/ui/button";
import { LucideIcon } from 'lucide-react';

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
  return (
    <div className={`fixed bottom-6 right-6 z-10 ${className}`}>
      <div className="relative h-14 w-14">
        {/* SVG squircle background with gradient outline */}
        <svg 
          className="absolute inset-0 w-full h-full" 
          viewBox="0 0 56 56" 
          fill="none"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Define gradient */}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
          
          {/* Gradient outline with balanced curvature on all sides */}
          <path
            d="M28 10C32 10 36 10.5 40 13.5C43.5 17 45 22 45 28C45 34 43.5 39 40 42.5C36 45.5 32 46 28 46C24 46 20 45.5 16 42.5C12.5 39 11 34 11 28C11 22 12.5 17 16 13.5C20 10.5 24 10 28 10Z"
            stroke="url(#gradient)"
            strokeWidth="2"
            fill="rgb(243 244 246)"
            className="transition-colors duration-200 group-hover:fill-gray-200"
          />
        </svg>
        
        {/* Button content */}
        <Button 
          className="absolute inset-0 flex items-center justify-center bg-transparent hover:bg-transparent shadow-lg group"
          style={{ width: "56px", height: "56px" }}
          size="icon"
          variant="ghost"
          onClick={onClick}
        >
          <Icon className="h-6 w-6 text-gray-600" />
        </Button>
      </div>
    </div>
  );
};

export default FloatingActionButton;
