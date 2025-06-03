
import PhotoGrid from '../components/PhotoGrid';
import PeoplePanel from '../components/PeoplePanel';
import { Button } from "@/components/ui/button";
import { Eye, GitMerge, ChevronDown } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Index = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isPeoplePanelOpen, setIsPeoplePanelOpen] = useState(false);

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

      {/* Main Content Container */}
      <div className="mx-[12px] xs:mx-5 sm:mx-8 md:mx-12 lg:mx-20 xl:mx-[120px] 2xl:mx-[200px]">
        {/* Content Area with Photo Grid and People Panel */}
        <div className="flex gap-8 relative">
          {/* Main content area with fixed width to prevent reflow */}
          <div 
            className="transition-all duration-500 ease-in-out"
            style={{
              width: isPeoplePanelOpen ? 'calc(100% - 320px - 2rem)' : '100%'
            }}
          >
            {/* Header and Buttons Container */}
            <div className="flex justify-between items-center pb-3">
              <h1 className="text-4xl font-bold text-white">
                People
              </h1>
              
              <div className="flex gap-2">
                <Button variant="outline" className="rounded-full bg-gray-800/90 text-white hover:bg-gray-700 border-0 xs:px-4 w-10 h-10 xs:w-auto xs:h-10">
                  <GitMerge className="xs:mr-2" />
                  <span className="hidden xs:inline">Merge People</span>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="rounded-full bg-gray-800/90 text-white hover:bg-gray-700 border-0 xs:px-4 w-10 h-10 xs:w-auto xs:h-10"
                  onClick={() => setIsPeoplePanelOpen(!isPeoplePanelOpen)}
                >
                  <Eye className="xs:mr-2" />
                  <span className="hidden xs:inline">Show/hide People</span>
                </Button>
              </div>
            </div>

            {/* Photo Grid Section */}
            <PhotoGrid />
          </div>

          {/* People Panel - Push behavior for md+ */}
          <div 
            className={`hidden md:block bg-gray-800 border-l border-gray-700 my-5 rounded-l-lg transition-all duration-500 ease-in-out ${
              isPeoplePanelOpen ? 'opacity-100 w-80' : 'opacity-0 w-0 overflow-hidden'
            }`}
          >
            <div className="p-6 h-full">
              <PeoplePanel />
            </div>
          </div>

          {/* People Panel - Overlay behavior for sm and below */}
          <div 
            className={`md:hidden fixed inset-0 z-50 bg-black/50 transition-all duration-300 ease-in-out ${
              isPeoplePanelOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            onClick={() => setIsPeoplePanelOpen(false)}
          >
            <div 
              className={`absolute right-0 top-0 h-full bg-gray-800 border-l border-gray-700 transition-all duration-500 ease-in-out ${
                isPeoplePanelOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
              style={{ width: '320px' }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 h-full">
                <PeoplePanel />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
