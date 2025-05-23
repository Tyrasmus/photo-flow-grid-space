
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
        >
          {/* Define gradient */}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
          
          {/* Gradient outline */}
          <path
            d="M28 4C37.333 4 44.667 4 48 7.333C51.333 10.667 52 18 52 28C52 38 51.333 45.333 48 48.667C44.667 52 37.333 52 28 52C18 52 10.667 51.333 7.333 48C4 44.667 4 37.333 4 28C4 18.667 4 11.333 7.333 8C10.667 4.667 18 4 28 4Z"
            stroke="url(#gradient)"
            strokeWidth="2"
            fill="rgb(243 244 246)"
            className="transition-colors duration-200 group-hover:fill-gray-200"
          />
        </svg>
        
        {/* Button content */}
        <Button 
          className="absolute inset-0 h-14 w-14 p-0 flex items-center justify-center bg-transparent hover:bg-transparent shadow-lg group"
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
