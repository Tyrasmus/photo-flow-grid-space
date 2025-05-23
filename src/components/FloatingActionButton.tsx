
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
      <div className="relative h-[67px] w-[67px]">
        {/* SVG squircle background with gradient outline */}
        <svg 
          className="absolute inset-0 w-full h-full drop-shadow-lg" 
          viewBox="0 0 67 67" 
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
            d="M33.5 9.5C42.8 9.5 48.9 11.4 53.4 15.9C57.3 19.8 57.5 26.4 57.5 33.5C57.5 40.6 57.3 47.2 53.4 51.1C48.9 55.6 42.8 57.5 33.5 57.5C24.2 57.5 18.1 55.6 13.6 51.1C9.7 47.2 9.5 40.6 9.5 33.5C9.5 26.4 9.7 19.8 13.6 15.9C18.1 11.4 24.2 9.5 33.5 9.5Z"
            stroke="url(#gradient)"
            strokeWidth="2"
            fill="rgb(243 244 246)"
            className="transition-colors duration-200 group-hover:fill-gray-200"
          />
        </svg>
        
        {/* Button content */}
        <Button 
          className="absolute inset-0 flex items-center justify-center bg-transparent hover:bg-transparent group"
          style={{ width: "67px", height: "67px" }}
          size="icon"
          variant="ghost"
          onClick={onClick}
        >
          <Icon className="h-7 w-7 text-gray-600" />
        </Button>
      </div>
    </div>
  );
};

export default FloatingActionButton;
