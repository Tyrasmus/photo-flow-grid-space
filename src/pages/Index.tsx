
import PhotoGrid from '../components/PhotoGrid';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Simple Header - aligned with photo grid */}
      <div className="mx-[12px] xs:mx-5 sm:mx-8 md:mx-12 lg:mx-20 xl:mx-[120px] 2xl:mx-[200px]">
        <h1 className="text-4xl font-bold text-gray-900 pt-12 pb-6">
          People
        </h1>
      </div>

      {/* Photo Grid Section */}
      <PhotoGrid />

      {/* Footer Section - removing this as part of simplifying the page */}
    </div>
  );
};

export default Index;
