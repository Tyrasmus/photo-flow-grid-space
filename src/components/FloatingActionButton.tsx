import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { LucideIcon, X, Send, Paperclip, MessageCircle, Rocket, Sparkle } from 'lucide-react';

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [currentLayout, setCurrentLayout] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);

  // Define 7 different sparkle layouts with 5 stars each
  const sparkleLayouts = [
    // Layout 1 - Close triangle with paired star and fifth star
    [
      { top: '-6px', right: '-6px', size: 12, delay: '100ms' },
      { top: '-8px', left: '-4px', size: 8, delay: '150ms' },
      { bottom: '-6px', right: '-8px', size: 10, delay: '125ms' },
      { top: '-2px', right: '-20px', size: 6, delay: '175ms' }, // Moved 3px further right
      { bottom: '-10px', left: '-12px', size: 8, delay: '200ms' } // Fifth star
    ],
    // Layout 2 - Side emphasis with paired star and fifth star
    [
      { top: '-10px', right: '-10px', size: 10, delay: '120ms' },
      { top: '50%', left: '-12px', transform: 'translateY(-50%)', size: 14, delay: '170ms' },
      { top: '50%', right: '-14px', transform: 'translateY(-50%)', size: 6, delay: '145ms' },
      { top: '40%', left: '-20px', transform: 'translateY(-50%)', size: 8, delay: '190ms' }, // Moved 3px further left
      { bottom: '-8px', right: '-16px', size: 6, delay: '215ms' } // Fifth star
    ],
    // Layout 3 - Asymmetric cluster with paired star and fifth star
    [
      { top: '-4px', right: '-12px', size: 14, delay: '110ms' },
      { top: '-10px', left: '-8px', size: 6, delay: '160ms' },
      { bottom: '-8px', right: '-6px', size: 12, delay: '135ms' },
      { bottom: '-4px', right: '-14px', size: 8, delay: '185ms' }, // Moved 3px further right
      { top: '-12px', right: '-4px', size: 10, delay: '210ms' } // Fifth star
    ],
    // Layout 4 - Diagonal line with paired star and fifth star
    [
      { top: '-6px', right: '-8px', size: 8, delay: '130ms' },
      { top: '40%', left: '-12px', size: 12, delay: '105ms' },
      { bottom: '-4px', right: '-10px', size: 10, delay: '165ms' },
      { top: '-7px', right: '-16px', size: 6, delay: '180ms' }, // Moved 3px further right
      { bottom: '-12px', left: '-6px', size: 8, delay: '205ms' } // Fifth star
    ],
    // Layout 5 - Vertical emphasis with paired star and fifth star
    [
      { top: '-8px', right: '-14px', size: 12, delay: '140ms' },
      { top: '-14px', left: '-8px', size: 10, delay: '115ms' },
      { bottom: '-12px', right: '-10px', size: 14, delay: '175ms' },
      { top: '-15px', left: '-16px', size: 6, delay: '195ms' }, // Moved 3px further left
      { top: '50%', right: '-18px', transform: 'translateY(-50%)', size: 8, delay: '220ms' } // Fifth star
    ],
    // Layout 6 - Horizontal spread with paired star and fifth star
    [
      { top: '50%', left: '-10px', transform: 'translateY(-50%)', size: 8, delay: '155ms' },
      { top: '50%', right: '-12px', transform: 'translateY(-50%)', size: 12, delay: '185ms' },
      { top: '-6px', right: '-6px', size: 10, delay: '125ms' },
      { top: '65%', right: '-20px', transform: 'translateY(-50%)', size: 6, delay: '205ms' }, // Moved 3px further right
      { bottom: '-8px', left: '-14px', size: 10, delay: '230ms' } // Fifth star
    ],
    // Layout 7 - Corner focus with paired star and fifth star
    [
      { top: '-8px', left: '-6px', size: 14, delay: '150ms' },
      { bottom: '-10px', left: '-8px', size: 6, delay: '120ms' },
      { bottom: '-6px', right: '-12px', size: 10, delay: '170ms' },
      { top: '-9px', left: '-14px', size: 8, delay: '200ms' }, // Moved 3px further left
      { top: '50%', left: '-16px', transform: 'translateY(-50%)', size: 6, delay: '225ms' } // Fifth star
    ]
  ];

  const handleFabClick = () => {
    setIsMenuOpen(true);
    if (onClick) onClick();
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    // Randomly select a new layout on each hover
    setCurrentLayout(Math.floor(Math.random() * sparkleLayouts.length));
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        handleCloseMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  if (isMenuOpen) {
    return (
      <div className={`fixed bottom-6 right-6 z-10 ${className}`} ref={menuRef}>
        <div className="w-80 h-[450px] bg-white rounded-3xl shadow-lg border border-gray-200 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-6 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <h2 className="text-sm font-semibold text-gray-900">Rocket Manager</h2>
            </div>
            <div className="flex gap-2">
              <Button 
                variant="ghost" 
                size="icon" 
                className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-gray-200"
              >
                <MessageCircle className="w-5 h-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-gray-200"
                onClick={handleCloseMenu}
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 flex flex-col px-6 min-h-0">
            <p className="text-gray-600 mb-4 leading-relaxed text-sm">
              Here are some ways I can help you with your launch plan.
            </p>

            {/* Prompt Pills */}
            <div className="space-y-3 flex-1">
              <button className="inline-block text-left px-4 py-2.5 rounded-2xl border-2 border-purple-600 bg-white hover:bg-gray-50 transition-colors text-sm h-10 flex items-center">
                <span className="text-gray-700">Add a </span>
                <span className="text-purple-600 font-medium">new goal</span>
                <span className="text-gray-700"> and suggest tasks</span>
              </button>

              <button className="inline-block text-left px-4 py-2.5 rounded-2xl border-2 border-purple-600 bg-white hover:bg-gray-50 transition-colors text-sm h-10 flex items-center">
                <span className="text-gray-700">What should I </span>
                <span className="text-purple-600 font-medium">work on today?</span>
              </button>

              <button className="inline-block text-left px-4 py-2.5 rounded-2xl border-2 border-purple-600 bg-white hover:bg-gray-50 transition-colors text-sm h-10 flex items-center">
                <span className="text-gray-700">What are the </span>
                <span className="text-purple-600 font-medium">next steps?</span>
              </button>
            </div>
          </div>

          {/* Input Section - Fixed at bottom */}
          <div className="px-6 pb-6 pt-4 flex-shrink-0">
            <div className="relative">
              <input 
                type="text" 
                placeholder="What can I help you with?"
                className="w-full bg-gray-100 rounded-2xl pl-4 pr-12 py-3 text-gray-600 placeholder-gray-400 border-none outline-none focus:ring-2 focus:ring-purple-200 text-sm"
              />
              <Button 
                size="icon" 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-transparent hover:bg-gray-200 text-gray-400"
                variant="ghost"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            
            <button className="flex items-center gap-2 mt-3 text-sm text-gray-500 hover:text-gray-700 transition-colors">
              <Paperclip className="w-4 h-4" />
              Knowledge sources
            </button>
          </div>
        </div>
      </div>
    );
  }

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
          onClick={handleFabClick}
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
