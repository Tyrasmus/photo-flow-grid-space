
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRocketIcon } from '../contexts/RocketIconContext';

const RocketSelector = () => {
  const { selectedRocket, setSelectedRocket } = useRocketIcon();

  const getRocketLabel = () => {
    switch (selectedRocket) {
      case 'rocket1':
        return 'Rocket 1';
      case 'rocket2':
        return 'Rocket 2';
      default:
        return 'Rocket 1';
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          className="rounded-full text-sm px-4 py-2 h-10 bg-gray-800/90 text-white hover:bg-gray-700 border-gray-600"
        >
          {getRocketLabel()}
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-gray-800 border-gray-600">
        <DropdownMenuItem 
          onClick={() => setSelectedRocket('rocket1')}
          className="text-white hover:bg-gray-700 cursor-pointer"
        >
          Rocket 1
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setSelectedRocket('rocket2')}
          className="text-white hover:bg-gray-700 cursor-pointer"
        >
          Rocket 2
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default RocketSelector;
