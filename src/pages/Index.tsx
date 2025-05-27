
import PhotoGrid from '../components/PhotoGrid';
import { Button } from "@/components/ui/button";
import { Eye, GitMerge, ChevronDown } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Index = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const getCurrentPageName = () => {
    return location.pathname === '/' ? 'People' : 'FAB';
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header with dropdown navigation */}
      <div className="mx-[12px] xs:mx-5 sm:mx-8 md:mx-12 lg:mx-20 xl:mx-[120px] 2xl:mx-[200px]">
        <div className="flex justify-between items-center pt-12 pb-3">
          <h1 className="text-4xl font-bold text-white">
            People
          </h1>
          
          {/* Navigation dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="outline" 
                className="rounded-full text-xs px-3 py-1 h-8 bg-gray-800/90 text-white hover:bg-gray-700 border-gray-600"
                size="sm"
              >
                {getCurrentPageName()}
                <ChevronDown className="ml-1 h-3 w-3" />
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
        
        <div className="flex justify-end gap-2 pb-3">
          <Button variant="outline" className="rounded-full bg-gray-800/90 text-white hover:bg-gray-700 border-0 xs:px-4 w-10 h-10 xs:w-auto xs:h-10">
            <GitMerge className="xs:mr-2" />
            <span className="hidden xs:inline">Merge People</span>
          </Button>
          <Button variant="outline" className="rounded-full bg-gray-800/90 text-white hover:bg-gray-700 border-0 xs:px-4 w-10 h-10 xs:w-auto xs:h-10">
            <Eye className="xs:mr-2" />
            <span className="hidden xs:inline">Show/hide People</span>
          </Button>
        </div>
      </div>

      {/* Photo Grid Section */}
      <PhotoGrid />
    </div>
  );
};

export default Index;
