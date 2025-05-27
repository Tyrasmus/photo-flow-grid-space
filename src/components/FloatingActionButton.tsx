
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { LucideIcon, Sparkle, Rocket } from 'lucide-react';

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

  // Define 7 different sparkle layouts with 4 stars each
  const sparkleLayouts = [
    // Layout 1 - Close triangle with paired star
    [
      { top: '-6px', right: '-6px', size: 12, delay: '100ms' },
      { top: '-8px', left: '-4px', size: 8, delay: '150ms' },
      { bottom: '-6px', right: '-8px', size: 10, delay: '125ms' },
      { top: '-2px', right: '-20px', size: 6, delay: '175ms' } // Moved 8px further right
    ],
    // Layout 2 - Side emphasis with paired star
    [
      { top: '-10px', right: '-10px', size: 10, delay: '120ms' },
      { top: '50%', left: '-12px', transform: 'translateY(-50%)', size: 14, delay: '170ms' },
      { top: '50%', right: '-14px', transform: 'translateY(-50%)', size: 6, delay: '145ms' },
      { top: '40%', left: '-23px', transform: 'translateY(-50%)', size: 8, delay: '190ms' } // Moved 8px further left
    ],
    // Layout 3 - Asymmetric cluster with paired star
    [
      { top: '-4px', right: '-12px', size: 14, delay: '110ms' },
      { top: '-10px', left: '-8px', size: 6, delay: '160ms' },
      { bottom: '-8px', right: '-6px', size: 12, delay: '135ms' },
      { bottom: '-4px', right: '-17px', size: 8, delay: '185ms' } // Moved 8px further right
    ],
    // Layout 4 - Diagonal line with paired star
    [
      { top: '-6px', right: '-8px', size: 8, delay: '130ms' },
      { top: '40%', left: '-12px', size: 12, delay: '105ms' },
      { bottom: '-4px', right: '-10px', size: 10, delay: '165ms' },
      { top: '-7px', right: '-19px', size: 6, delay: '180ms' } // Moved 8px further right
    ],
    // Layout 5 - Vertical emphasis with paired star
    [
      { top: '-8px', right: '-14px', size: 12, delay: '140ms' },
      { top: '-14px', left: '-8px', size: 10, delay: '115ms' },
      { bottom: '-12px', right: '-10px', size: 14, delay: '175ms' },
      { top: '-15px', left: '-19px', size: 6, delay: '195ms' } // Moved 8px further left
    ],
    // Layout 6 - Horizontal spread with paired star
    [
      { top: '50%', left: '-10px', transform: 'translateY(-50%)', size: 8, delay: '155ms' },
      { top: '50%', right: '-12px', transform: 'translateY(-50%)', size: 12, delay: '185ms' },
      { top: '-6px', right: '-6px', size: 10, delay: '125ms' },
      { top: '65%', right: '-23px', transform: 'translateY(-50%)', size: 6, delay: '205ms' } // Moved 8px further right
    ],
    // Layout 7 - Corner focus with paired star
    [
      { top: '-8px', left: '-6px', size: 14, delay: '150ms' },
      { bottom: '-10px', left: '-8px', size: 6, delay: '120ms' },
      { bottom: '-6px', right: '-12px', size: 10, delay: '170ms' },
      { top: '-9px', left: '-17px', size: 8, delay: '200ms' } // Moved 8px further left
    ]
  ];

  const handleMouseEnter = () => {
    setIsHovered(true);
    // Randomly select a new layout on each hover
    setCurrentLayout(Math.floor(Math.random() * sparkleLayouts.length));
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className={`fixed bottom-6 right-6 z-10 ${className}`}>
      <div className="relative h-[67px] w-[67px] group">
        {/* Sparkles around the FAB with current layout */}
        <div className="absolute inset-0">
          {sparkleLayouts[currentLayout].map((sparkle, index) => (
            <Sparkle 
              key={index}
              className={`absolute text-white transition-opacity duration-500 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                top: sparkle.top,
                right: sparkle.right,
                bottom: sparkle.bottom,
                left: sparkle.left,
                transform: sparkle.transform,
                transitionDelay: isHovered ? sparkle.delay : '0ms'
              }}
              size={sparkle.size}
              strokeWidth={2}
              fill="white"
            />
          ))}
        </div>

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
              <stop offset="0%" stopColor="#E60FEF" />
              <stop offset="33%" stopColor="#9D29B0" />
              <stop offset="67%" stopColor="#494CD8" />
              <stop offset="100%" stopColor="#3EC5FD" />
            </linearGradient>
            <linearGradient id="magentaGradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#9D29B0" />
              <stop offset="100%" stopColor="#9D29B0" />
            </linearGradient>
          </defs>
          
          {/* Base gradient path with stroke width 2px */}
          <path
            d="M33.5 8C43.5 8 50 8.5 54.5 13C59 17.5 59.5 24 59.5 33.5C59.5 43 59 49.5 54.5 54C50 58.5 43.5 59 33.5 59C23.5 59 17 58.5 12.5 54C8 49.5 7.5 43 7.5 33.5C7.5 24 8 17.5 12.5 13C17 8.5 23.5 8 33.5 8Z"
            stroke="url(#gradient)"
            strokeWidth="2"
            fill="white"
            className="transition-all duration-300 ease-out hover:fill-gray-100 group-hover:stroke-[4px]"
          />
          
          {/* Overlay magenta path that fades in on hover with animated stroke width */}
          <path
            d="M33.5 8C43.5 8 50 8.5 54.5 13C59 17.5 59.5 24 59.5 33.5C59.5 43 59 49.5 54.5 54C50 58.5 43.5 59 33.5 59C23.5 59 17 58.5 12.5 54C8 49.5 7.5 43 7.5 33.5C7.5 24 8 17.5 12.5 13C17 8.5 23.5 8 33.5 8Z"
            stroke="url(#magentaGradient)"
            strokeWidth="2"
            fill="transparent"
            className="transition-all duration-300 ease-out opacity-0 group-hover:opacity-100 group-hover:stroke-[4px]"
          />
        </svg>
        
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
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="rocketGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#E60FEF" />
                <stop offset="33%" stopColor="#9D29B0" />
                <stop offset="67%" stopColor="#494CD8" />
                <stop offset="100%" stopColor="#3EC5FD" />
              </linearGradient>
            </defs>
            <Rocket 
              className={`transition-all duration-300 ease-in-out ${
                isHovered ? 'text-transparent' : 'text-gray-600'
              }`}
              strokeWidth={3}
              fill={isHovered ? 'url(#rocketGradient)' : 'none'}
              stroke={isHovered ? 'url(#rocketGradient)' : 'currentColor'}
            />
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default FloatingActionButton;
