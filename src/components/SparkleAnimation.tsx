
import React from 'react';

interface SparkleAnimationProps {
  isHovered: boolean;
  currentLayout: number;
}

const SparkleAnimation = ({ isHovered, currentLayout }: SparkleAnimationProps) => {
  // 10 different sparkle layouts for variety
  const sparkleLayouts = [
    // Layout 0: Classic cross pattern
    [
      { top: '10%', left: '50%', delay: 0 },
      { top: '50%', left: '85%', delay: 100 },
      { top: '90%', left: '50%', delay: 200 },
      { top: '50%', left: '15%', delay: 300 },
    ],
    // Layout 1: Diamond pattern
    [
      { top: '20%', left: '20%', delay: 0 },
      { top: '20%', left: '80%', delay: 150 },
      { top: '80%', left: '80%', delay: 300 },
      { top: '80%', left: '20%', delay: 450 },
    ],
    // Layout 2: Circular arrangement
    [
      { top: '15%', left: '50%', delay: 0 },
      { top: '35%', left: '85%', delay: 100 },
      { top: '65%', left: '85%', delay: 200 },
      { top: '85%', left: '50%', delay: 300 },
      { top: '65%', left: '15%', delay: 400 },
      { top: '35%', left: '15%', delay: 500 },
    ],
    // Layout 3: Asymmetric scatter
    [
      { top: '25%', left: '30%', delay: 0 },
      { top: '40%', left: '75%', delay: 120 },
      { top: '70%', left: '25%', delay: 240 },
      { top: '60%', left: '70%', delay: 360 },
      { top: '30%', left: '60%', delay: 480 },
    ],
    // Layout 4: Star formation
    [
      { top: '10%', left: '50%', delay: 0 },
      { top: '30%', left: '75%', delay: 80 },
      { top: '60%', left: '80%', delay: 160 },
      { top: '85%', left: '60%', delay: 240 },
      { top: '90%', left: '40%', delay: 320 },
      { top: '85%', left: '20%', delay: 400 },
      { top: '60%', left: '15%', delay: 480 },
      { top: '30%', left: '25%', delay: 560 },
    ],
    // Layout 5: Minimal corners
    [
      { top: '15%', left: '15%', delay: 0 },
      { top: '15%', left: '85%', delay: 200 },
      { top: '85%', left: '85%', delay: 400 },
      { top: '85%', left: '15%', delay: 600 },
    ],
    // Layout 6: Vertical line
    [
      { top: '20%', left: '50%', delay: 0 },
      { top: '40%', left: '50%', delay: 100 },
      { top: '60%', left: '50%', delay: 200 },
      { top: '80%', left: '50%', delay: 300 },
    ],
    // Layout 7: Horizontal line
    [
      { top: '50%', left: '20%', delay: 0 },
      { top: '50%', left: '40%', delay: 100 },
      { top: '50%', left: '60%', delay: 200 },
      { top: '50%', left: '80%', delay: 300 },
    ],
    // Layout 8: Triangle
    [
      { top: '20%', left: '50%', delay: 0 },
      { top: '75%', left: '25%', delay: 150 },
      { top: '75%', left: '75%', delay: 300 },
    ],
    // Layout 9: Spiral-like
    [
      { top: '25%', left: '50%', delay: 0 },
      { top: '40%', left: '70%', delay: 80 },
      { top: '60%', left: '70%', delay: 160 },
      { top: '75%', left: '50%', delay: 240 },
      { top: '60%', left: '30%', delay: 320 },
      { top: '40%', left: '30%', delay: 400 },
    ],
  ];

  const currentSparkles = sparkleLayouts[currentLayout] || sparkleLayouts[0];

  return (
    <>
      {currentSparkles.map((sparkle, index) => (
        <div
          key={`${currentLayout}-${index}`}
          className={`absolute w-1 h-1 bg-white rounded-full transition-all duration-500 ease-out ${
            isHovered 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-0'
          }`}
          style={{
            top: sparkle.top,
            left: sparkle.left,
            transitionDelay: `${sparkle.delay}ms`,
            filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.8))',
          }}
        />
      ))}
    </>
  );
};

export default SparkleAnimation;
