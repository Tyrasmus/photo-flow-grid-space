
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
      <div className="relative h-[67px] w-[67px] group">
        {/* SVG squircle background with animated gradient transition */}
        <svg 
          className="absolute inset-0 w-full h-full drop-shadow-lg" 
          viewBox="0 0 67 67" 
          fill="none"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Define gradients */}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D743DD" />
              <stop offset="33%" stopColor="#9D29B0" />
              <stop offset="67%" stopColor="#494CD8" />
              <stop offset="100%" stopColor="#3EC5FD" />
            </linearGradient>
            <linearGradient id="magentaGradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#9D29B0" />
              <stop offset="100%" stopColor="#9D29B0" />
            </linearGradient>
          </defs>
          
          {/* Base gradient path */}
          <path
            d="M33.5 7C44.5 7 51.5 7.5 56.5 12.5C61.5 17.5 62 24.5 62 33.5C62 42.5 61.5 49.5 56.5 54.5C51.5 59.5 44.5 60 33.5 60C22.5 60 15.5 59.5 10.5 54.5C5.5 49.5 5 42.5 5 33.5C5 24.5 5.5 17.5 10.5 12.5C15.5 7.5 22.5 7 33.5 7Z"
            stroke="url(#gradient)"
            strokeWidth="4"
            fill="white"
            className="transition-all duration-500 ease-out hover:fill-gray-100"
          />
          
          {/* Overlay magenta path that fades in on hover */}
          <path
            d="M33.5 7C44.5 7 51.5 7.5 56.5 12.5C61.5 17.5 62 24.5 62 33.5C62 42.5 61.5 49.5 56.5 54.5C51.5 59.5 44.5 60 33.5 60C22.5 60 15.5 59.5 10.5 54.5C5.5 49.5 5 42.5 5 33.5C5 24.5 5.5 17.5 10.5 12.5C15.5 7.5 22.5 7 33.5 7Z"
            stroke="url(#magentaGradient)"
            strokeWidth="4"
            fill="transparent"
            className="transition-opacity duration-500 ease-out opacity-0 group-hover:opacity-100"
          />
        </svg>
        
        {/* Button content */}
        <Button 
          className="absolute inset-0 flex items-center justify-center bg-transparent hover:bg-transparent"
          style={{ width: "67px", height: "67px" }}
          size="icon"
          variant="ghost"
          onClick={onClick}
        >
          <Icon className="h-7 w-7 text-gray-600" strokeWidth={3} />
        </Button>
      </div>
    </div>
  );
};

export default FloatingActionButton;
