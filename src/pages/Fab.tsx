
import FloatingActionWrapper from '../components/FloatingActionWrapper';
import { Rocket, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Fab = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleAddPhoto = () => {
    console.log('Add new photo clicked');
    // Add your photo upload logic here
  };

  const getCurrentPageName = () => {
    return location.pathname === '/' ? 'People' : 'FAB';
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Centered dropdown navigation */}
      <div className="flex justify-center pt-8 pb-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="outline" 
              className="rounded-full text-sm px-4 py-2 h-10 bg-gray-800/90 text-white hover:bg-gray-700 border-gray-600"
            >
              {getCurrentPageName()}
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-gray-800 border-gray-600">
            <DropdownMenuItem 
              onClick={() => navigate('/')}
              className="text-white hover:bg-gray-700 cursor-pointer"
            >
              People
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={() => navigate('/fab')}
              className="text-white hover:bg-gray-700 cursor-pointer"
            >
              FAB
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Header */}
      <div className="mx-[12px] xs:mx-5 sm:mx-8 md:mx-12 lg:mx-20 xl:mx-[120px] 2xl:mx-[200px]">
        <div className="pt-4 pb-3">
          <h1 className="text-4xl font-bold text-white">
            FAB Demo
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="mx-[12px] xs:mx-5 sm:mx-8 md:mx-12 lg:mx-20 xl:mx-[120px] 2xl:mx-[200px] py-8">
        <div className="text-center text-white">
          <p className="text-lg mb-4">This page showcases the Floating Action Button.</p>
          <p className="text-gray-400">Click the rocket button in the bottom right to see it in action!</p>
        </div>
      </div>

      <FloatingActionWrapper 
        icon={Rocket} 
        onClick={handleAddPhoto} 
      />
    </div>
  );
};

export default Fab;
