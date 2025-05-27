
import React, { useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { X, Send, Paperclip, MessageCircle } from 'lucide-react';

interface FloatingActionMenuProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

const FloatingActionMenu = ({
  isOpen,
  onClose,
  className = ""
}: FloatingActionMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div 
      className={`fixed bottom-6 right-6 z-10 animate-fade-in ${className}`} 
      ref={menuRef}
    >
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
              onClick={onClose}
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
            <button className="inline-block text-left px-4 py-2.5 rounded-2xl border-2 border-purple-600 bg-white hover:bg-purple-50 transition-colors text-sm h-10 flex items-center">
              <span className="text-gray-700">Add a </span>
              <span className="text-purple-600 font-medium">new goal </span>
              <span className="text-gray-700">and suggest tasks</span>
            </button>

            <button className="inline-block text-left px-4 py-2.5 rounded-2xl border-2 border-purple-600 bg-white hover:bg-purple-50 transition-colors text-sm h-10 flex items-center">
              <span className="text-gray-700">What should </span>
              <span className="text-purple-600 font-medium">I work on today?</span>
            </button>

            <button className="inline-block text-left px-4 py-2.5 rounded-2xl border-2 border-purple-600 bg-white hover:bg-purple-50 transition-colors text-sm h-10 flex items-center">
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
};

export default FloatingActionMenu;
