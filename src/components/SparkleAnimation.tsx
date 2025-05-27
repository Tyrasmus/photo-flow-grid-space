
import React from 'react';
import { Sparkle } from 'lucide-react';

interface SparkleLayout {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  transform?: string;
  size: number;
  delay: string;
}

interface SparkleAnimationProps {
  isHovered: boolean;
  currentLayout: number;
}

const SparkleAnimation = ({ isHovered, currentLayout }: SparkleAnimationProps) => {
  // Define 7 different sparkle layouts with 4 stars each
  const sparkleLayouts: SparkleLayout[][] = [
    // Layout 1 - Close triangle with paired star
    [
      { top: '-6px', right: '-6px', size: 12, delay: '100ms' },
      { top: '-8px', left: '-4px', size: 8, delay: '150ms' },
      { bottom: '-6px', right: '-8px', size: 10, delay: '125ms' },
      { top: '-2px', right: '-20px', size: 6, delay: '175ms' }
    ],
    // Layout 2 - Side emphasis with paired star
    [
      { top: '-10px', right: '-10px', size: 10, delay: '120ms' },
      { top: '50%', left: '-12px', transform: 'translateY(-50%)', size: 14, delay: '170ms' },
      { top: '50%', right: '-14px', transform: 'translateY(-50%)', size: 6, delay: '145ms' },
      { top: '40%', left: '-23px', transform: 'translateY(-50%)', size: 8, delay: '190ms' }
    ],
    // Layout 3 - Asymmetric cluster with paired star
    [
      { top: '-4px', right: '-12px', size: 14, delay: '110ms' },
      { top: '-10px', left: '-8px', size: 6, delay: '160ms' },
      { bottom: '-8px', right: '-6px', size: 12, delay: '135ms' },
      { bottom: '-4px', right: '-17px', size: 8, delay: '185ms' }
    ],
    // Layout 4 - Diagonal line with paired star
    [
      { top: '-6px', right: '-8px', size: 8, delay: '130ms' },
      { top: '40%', left: '-12px', size: 12, delay: '105ms' },
      { bottom: '-4px', right: '-10px', size: 10, delay: '165ms' },
      { top: '-7px', right: '-19px', size: 6, delay: '180ms' }
    ],
    // Layout 5 - Vertical emphasis with paired star
    [
      { top: '-8px', right: '-14px', size: 12, delay: '140ms' },
      { top: '-14px', left: '-8px', size: 10, delay: '115ms' },
      { bottom: '-12px', right: '-10px', size: 14, delay: '175ms' },
      { top: '-15px', left: '-19px', size: 6, delay: '195ms' }
    ],
    // Layout 6 - Horizontal spread with paired star
    [
      { top: '50%', left: '-10px', transform: 'translateY(-50%)', size: 8, delay: '155ms' },
      { top: '50%', right: '-12px', transform: 'translateY(-50%)', size: 12, delay: '185ms' },
      { top: '-6px', right: '-6px', size: 10, delay: '125ms' },
      { top: '65%', right: '-23px', transform: 'translateY(-50%)', size: 6, delay: '205ms' }
    ],
    // Layout 7 - Corner focus with paired star
    [
      { top: '-8px', left: '-6px', size: 14, delay: '150ms' },
      { bottom: '-10px', left: '-8px', size: 6, delay: '120ms' },
      { bottom: '-6px', right: '-12px', size: 10, delay: '170ms' },
      { top: '-9px', left: '-17px', size: 8, delay: '200ms' }
    ]
  ];

  return (
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
  );
};

export default SparkleAnimation;
