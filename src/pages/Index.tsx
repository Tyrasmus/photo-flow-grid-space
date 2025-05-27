
import PhotoGrid from '../components/PhotoGrid';
import { Button } from "@/components/ui/button";
import { Eye, GitMerge } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header with centered navigation */}
      <div className="mx-[12px] xs:mx-5 sm:mx-8 md:mx-12 lg:mx-20 xl:mx-[120px] 2xl:mx-[200px]">
        <div className="flex justify-between items-center pt-12 pb-3">
          <h1 className="text-4xl font-bold text-white">
            People
          </h1>
          
          {/* Centered navigation toggle */}
          <div className="flex gap-1 justify-center">
            <Button 
              asChild
              variant={location.pathname === '/' ? "default" : "outline"} 
              className="rounded-full text-xs px-3 py-1 h-8"
              size="sm"
            >
              <Link to="/">People</Link>
            </Button>
            <Button 
              asChild
              variant={location.pathname === '/fab' ? "default" : "outline"} 
              className="rounded-full text-xs px-3 py-1 h-8"
              size="sm"
            >
              <Link to="/fab">FAB</Link>
            </Button>
          </div>
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
