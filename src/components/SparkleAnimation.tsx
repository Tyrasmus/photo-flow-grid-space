
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
  // Gradient colors from the FAB stroke outline
  const gradientColors = ['#E60FEF', '#9D29B0', '#494CD8', '#3EC5FD'];

  // Define 10 different sparkle layouts with 3 stars each
  const sparkleLayouts: SparkleLayout[][] = [
    // Layout 1 - Close triangle
    [
      { top: '-6px', right: '-6px', size: 12, delay: '100ms' },
      { top: '-8px', left: '-4px', size: 8, delay: '150ms' },
      { bottom: '-6px', right: '-8px', size: 10, delay: '125ms' }
    ],
    // Layout 2 - Side emphasis
    [
      { top: '-10px', right: '-10px', size: 10, delay: '120ms' },
      { top: '50%', left: '-12px', transform: 'translateY(-50%)', size: 14, delay: '170ms' },
      { top: '50%', right: '-14px', transform: 'translateY(-50%)', size: 6, delay: '145ms' }
    ],
    // Layout 3 - Asymmetric cluster
    [
      { top: '-4px', right: '-12px', size: 14, delay: '110ms' },
      { top: '-10px', left: '-8px', size: 6, delay: '160ms' },
      { bottom: '-8px', right: '-6px', size: 12, delay: '135ms' }
    ],
    // Layout 4 - Diagonal line
    [
      { top: '-6px', right: '-8px', size: 8, delay: '130ms' },
      { top: '40%', left: '-12px', size: 12, delay: '105ms' },
      { bottom: '-4px', right: '-10px', size: 10, delay: '165ms' }
    ],
    // Layout 5 - Vertical emphasis
    [
      { top: '-8px', right: '-14px', size: 12, delay: '140ms' },
      { top: '-14px', left: '-8px', size: 10, delay: '115ms' },
      { bottom: '-12px', right: '-10px', size: 14, delay: '175ms' }
    ],
    // Layout 6 - Horizontal spread
    [
      { top: '50%', left: '-10px', transform: 'translateY(-50%)', size: 8, delay: '155ms' },
      { top: '50%', right: '-12px', transform: 'translateY(-50%)', size: 12, delay: '185ms' },
      { top: '-6px', right: '-6px', size: 10, delay: '125ms' }
    ],
    // Layout 7 - Corner focus
    [
      { top: '-8px', left: '-6px', size: 14, delay: '150ms' },
      { bottom: '-10px', left: '-8px', size: 6, delay: '120ms' },
      { bottom: '-6px', right: '-12px', size: 10, delay: '170ms' }
    ],
    // Layout 8 - Scattered wide
    [
      { top: '-12px', right: '-2px', size: 8, delay: '140ms' },
      { top: '30%', left: '-16px', transform: 'translateY(-50%)', size: 12, delay: '110ms' },
      { bottom: '-14px', right: '-4px', size: 10, delay: '180ms' }
    ],
    // Layout 9 - Top heavy
    [
      { top: '-10px', left: '-2px', size: 12, delay: '125ms' },
      { top: '-6px', right: '-14px', size: 14, delay: '160ms' },
      { top: '-14px', left: '50%', transform: 'translateX(-50%)', size: 8, delay: '145ms' }
    ],
    // Layout 10 - Bottom arc
    [
      { bottom: '-8px', left: '-10px', size: 10, delay: '135ms' },
      { bottom: '-12px', left: '50%', transform: 'translateX(-50%)', size: 12, delay: '165ms' },
      { bottom: '-6px', right: '-8px', size: 14, delay: '115ms' }
    ]
  ];

  return (
    <div className="absolute inset-0">
      {sparkleLayouts[currentLayout].map((sparkle, index) => (
        <Sparkle 
          key={index}
          className={`absolute transition-all duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            top: sparkle.top,
            right: sparkle.right,
            bottom: sparkle.bottom,
            left: sparkle.left,
            transform: `${sparkle.transform || ''} ${isHovered ? 'rotate(180deg)' : 'rotate(0deg)'}`,
            transitionDelay: isHovered ? sparkle.delay : '0ms',
            color: gradientColors[index % gradientColors.length]
          }}
          size={sparkle.size}
          strokeWidth={2}
          fill={gradientColors[index % gradientColors.length]}
        />
      ))}
    </div>
  );
};

export default SparkleAnimation;
