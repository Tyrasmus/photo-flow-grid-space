
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
              <stop offset="0%" stopColor="#9D29B0" />
              <stop offset="100%" stopColor="#3EC5FD" />
            </linearGradient>
            <linearGradient id="hoverGradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#9D29B0" className="transition-all duration-500 ease-out">
                <animate 
                  attributeName="stop-color" 
                  values="#9D29B0;#9D29B0" 
                  dur="0.5s" 
                  begin="indefinite" 
                  id="magentaGrow"
                />
              </stop>
              <stop offset="100%" stopColor="#3EC5FD" className="transition-all duration-500 ease-out">
                <animate 
                  attributeName="stop-color" 
                  values="#3EC5FD;#9D29B0" 
                  dur="0.5s" 
                  begin="indefinite" 
                  id="magentaSpread"
                />
              </stop>
            </linearGradient>
            
            {/* Animated gradient that grows magenta coverage */}
            <linearGradient id="animatedGradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#9D29B0" />
              <stop offset="0%" stopColor="#9D29B0" className="transition-all duration-500 ease-out group-hover:offset-100">
                <animate 
                  attributeName="offset" 
                  values="0%;100%" 
                  dur="0.5s" 
                  begin="indefinite" 
                  id="growAnimation"
                />
              </stop>
              <stop offset="1%" stopColor="#3EC5FD" className="transition-all duration-500 ease-out group-hover:offset-100" />
            </linearGradient>
          </defs>
          
          {/* Main path with growing magenta effect */}
          <path
            d="M33.5 8C43.5 8 50 8.5 54.5 13C59 17.5 59.5 24 59.5 33.5C59.5 43 59 49.5 54.5 54C50 58.5 43.5 59 33.5 59C23.5 59 17 58.5 12.5 54C8 49.5 7.5 43 7.5 33.5C7.5 24 8 17.5 12.5 13C17 8.5 23.5 8 33.5 8Z"
            stroke="url(#animatedGradient)"
            strokeWidth="4"
            fill="rgb(243 244 246)"
            className="transition-all duration-500 ease-out hover:fill-gray-200"
            style={{
              strokeDasharray: '0, 100',
              animation: 'none'
            }}
          />
          
          {/* Overlay path for smooth CSS transition fallback */}
          <path
            d="M33.5 8C43.5 8 50 8.5 54.5 13C59 17.5 59.5 24 59.5 33.5C59.5 43 59 49.5 54.5 54C50 58.5 43.5 59 33.5 59C23.5 59 17 58.5 12.5 54C8 49.5 7.5 43 7.5 33.5C7.5 24 8 17.5 12.5 13C17 8.5 23.5 8 33.5 8Z"
            stroke="#9D29B0"
            strokeWidth="4"
            fill="transparent"
            className="opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"
            style={{
              strokeDasharray: '200',
              strokeDashoffset: '200',
              animation: 'none'
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
          onMouseEnter={() => {
            // Trigger stroke dash animation on hover
            const overlay = document.querySelector('.group:hover path:last-of-type') as SVGPathElement;
            if (overlay) {
              overlay.style.strokeDashoffset = '0';
              overlay.style.transition = 'stroke-dashoffset 0.5s ease-out';
            }
          }}
        >
          <Icon className="h-7 w-7 text-gray-600" strokeWidth={3} />
        </Button>
      </div>
      
      <style>{`
        .group:hover path:last-of-type {
          stroke-dashoffset: 0 !important;
        }
        
        @keyframes magentaGrow {
          0% {
            stroke-dasharray: 0 200;
          }
          100% {
            stroke-dasharray: 200 0;
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingActionButton;
