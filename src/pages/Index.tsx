
import PhotoGrid from '../components/PhotoGrid';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Simple Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center text-gray-900">
          people
        </h1>
      </div>

      {/* Photo Grid Section */}
      <PhotoGrid />

      {/* Footer Section - removing this as part of simplifying the page */}
    </div>
  );
};

export default Index;
