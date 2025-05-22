
import PhotoGrid from '../components/PhotoGrid';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Responsive Photo Grid
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A beautiful, responsive grid that displays 6 columns on large screens while 
              maintaining consistent photo sizes with the same aspect ratio.
            </p>
          </div>
        </div>
      </div>

      {/* Photo Grid Section */}
      <PhotoGrid />

      {/* Footer Section */}
      <div className="bg-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-gray-500">
              Grid automatically adjusts from 2 columns on mobile to 6 columns on desktop
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
