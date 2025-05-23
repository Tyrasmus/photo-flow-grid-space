
import PhotoGrid from '../components/PhotoGrid';
import { Button } from "@/components/ui/button";
import { Eye, GitMerge } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with buttons */}
      <div className="mx-[12px] xs:mx-5 sm:mx-8 md:mx-12 lg:mx-20 xl:mx-[120px] 2xl:mx-[200px]">
        <div className="flex justify-between items-center pt-12 pb-6">
          <h1 className="text-4xl font-bold text-gray-900">
            People
          </h1>
          
          <div className="flex gap-2">
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
      </div>

      {/* Photo Grid Section */}
      <PhotoGrid />
    </div>
  );
};

export default Index;
