
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
              <stop offset="67%" stopColor="#9D29B0" />
              <stop offset="100%" stopColor="#3EC5FD" />
            </linearGradient>
            <linearGradient id="magentaGradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#9D29B0" />
              <stop offset="100%" stopColor="#9D29B0" />
            </linearGradient>
          </defs>
          
          {/* Base gradient path */}
          <path
            d="M33.5 8C43.5 8 50 8.5 54.5 13C59 17.5 59.5 24 59.5 33.5C59.5 43 59 49.5 54.5 54C50 58.5 43.5 59 33.5 59C23.5 59 17 58.5 12.5 54C8 49.5 7.5 43 7.5 33.5C7.5 24 8 17.5 12.5 13C17 8.5 23.5 8 33.5 8Z"
            stroke="url(#gradient)"
            strokeWidth="4"
            fill="white"
            className="transition-all duration-500 ease-out hover:fill-gray-100"
          />
          
          {/* Overlay magenta path that grows on hover */}
          <path
            d="M33.5 8C43.5 8 50 8.5 54.5 13C59 17.5 59.5 24 59.5 33.5C59.5 43 59 49.5 54.5 54C50 58.5 43.5 59 33.5 59C23.5 59 17 58.5 12.5 54C8 49.5 7.5 43 7.5 33.5C7.5 24 8 17.5 12.5 13C17 8.5 23.5 8 33.5 8Z"
            stroke="url(#magentaGradient)"
            strokeWidth="4"
            fill="transparent"
            className="transition-all duration-500 ease-out"
            style={{
              strokeDasharray: '200',
              strokeDashoffset: '200',
            }}
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
      
      <style>{`
        .group:hover path:last-of-type {
          stroke-dashoffset: 0 !important;
        }
      `}</style>
    </div>
  );
};

export default FloatingActionButton;
