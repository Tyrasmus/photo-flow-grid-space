
import React from 'react';
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, Users } from "lucide-react";

const PeoplePanel = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="flex flex-col space-y-2 text-left">
        <h2 className="text-lg font-semibold text-white flex items-center gap-2">
          <Users className="h-5 w-5" />
          People Management
        </h2>
        <p className="text-sm text-gray-300">
          Manage visibility and organization of people in your photo grid
        </p>
      </div>
      
      <div className="flex-1 mt-6 space-y-4">
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-white">Visibility Options</h3>
          
          <div className="space-y-2">
            <Button 
              variant="outline" 
              className="w-full justify-start bg-gray-700 text-white border-gray-600 hover:bg-gray-600"
            >
              <Eye className="mr-2 h-4 w-4" />
              Show All People
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full justify-start bg-gray-700 text-white border-gray-600 hover:bg-gray-600"
            >
              <EyeOff className="mr-2 h-4 w-4" />
              Hide Unidentified People
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full justify-start bg-gray-700 text-white border-gray-600 hover:bg-gray-600"
            >
              <Users className="mr-2 h-4 w-4" />
              Show Only Favorites
            </Button>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-4">
          <h3 className="text-lg font-semibold text-white mb-3">People List</h3>
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {['John Doe', 'Jane Smith', 'Mike Johnson', 'Sarah Wilson', 'David Brown'].map((name, index) => (
              <div key={index} className="flex items-center justify-between p-2 rounded bg-gray-700/50">
                <span className="text-gray-200">{name}</span>
                <Button 
                  size="sm" 
                  variant="ghost" 
                  className="text-gray-400 hover:text-white hover:bg-gray-600"
                >
                  <Eye className="h-3 w-3" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeoplePanel;
