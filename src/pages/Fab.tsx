
import FloatingActionWrapper from '../components/FloatingActionWrapper';
import { Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Fab = () => {
  const location = useLocation();

  const handleAddPhoto = () => {
    console.log('Add new photo clicked');
    // Add your photo upload logic here
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <div className="mx-[12px] xs:mx-5 sm:mx-8 md:mx-12 lg:mx-20 xl:mx-[120px] 2xl:mx-[200px]">
        <div className="flex justify-between items-center pt-12 pb-3">
          <h1 className="text-4xl font-bold text-white">
            FAB Demo
          </h1>
          
          <div className="flex gap-2">
            <Button 
              asChild
              variant={location.pathname === '/' ? "default" : "outline"} 
              className="rounded-full"
            >
              <Link to="/">People</Link>
            </Button>
            <Button 
              asChild
              variant={location.pathname === '/fab' ? "default" : "outline"} 
              className="rounded-full"
            >
              <Link to="/fab">FAB</Link>
            </Button>
          </div>
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
