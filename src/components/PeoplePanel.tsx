
import React, { useState, useEffect } from 'react';

interface PeoplePanelProps {
  isOpen?: boolean;
}

const PeoplePanel: React.FC<PeoplePanelProps> = ({ isOpen = true }) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Delay content fade-in to match pane animation duration (500ms)
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      setShowContent(false);
    }
  }, [isOpen]);

  return (
    <div className="h-full flex flex-col">
      <div 
        className={`flex flex-col space-y-2 text-left transition-opacity duration-300 ease-in-out ${
          showContent ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <h2 className="text-lg font-semibold text-white">
          Example Side Panel
        </h2>
        <p className="text-sm text-gray-300">
          This is a demonstration of smooth pane interactions and animations.
        </p>
      </div>
      
      <div 
        className={`flex-1 mt-6 space-y-4 transition-opacity duration-300 ease-in-out ${
          showContent ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="space-y-3">
          <h3 className="text-base font-medium text-white">Panel Content</h3>
          
          <div className="space-y-3 text-gray-300 text-sm">
            <p>
              The panel slides in smoothly from the right side while the main content 
              elegantly resizes to make room.
            </p>
            
            <p>
              This creates a seamless user experience with fluid animations that 
              don't feel jarring or abrupt.
            </p>
            
            <p>
              You can use this pattern for various types of contextual information, 
              settings panels, or detailed views.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-4">
          <h3 className="text-base font-medium text-white mb-3">Animation Features</h3>
          <div className="space-y-2 text-sm text-gray-300">
            <div className="p-3 rounded bg-gray-700/50">
              ✨ Smooth slide-in animation
            </div>
            <div className="p-3 rounded bg-gray-700/50">
              🎯 Content reflow without jumping
            </div>
            <div className="p-3 rounded bg-gray-700/50">
              ⚡ Responsive design principles
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeoplePanel;
