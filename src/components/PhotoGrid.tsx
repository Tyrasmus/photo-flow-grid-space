
import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface Photo {
  id: string;
  url: string;
  alt: string;
  width: number;
  height: number;
  name?: string; // Adding optional name field
}

const PhotoGrid = () => {
  const photos: Photo[] = [
    {
      id: '1',
      url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=800&fit=crop',
      alt: 'Portrait of woman with short blonde hair',
      width: 800,
      height: 800,
      name: 'Emily Chen'
    },
    {
      id: '2',
      url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=800&fit=crop',
      alt: 'Portrait of woman with dark hair',
      width: 800,
      height: 800,
      name: 'Sophie Williams'
    },
    {
      id: '3',
      url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop',
      alt: 'Portrait of a young man',
      width: 800,
      height: 800,
      name: 'Marcus Johnson'
    },
    {
      id: '4',
      url: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&h=800&fit=crop',
      alt: 'Portrait of smiling woman',
      width: 800,
      height: 800,
      name: 'Amelia Hart'
    },
    {
      id: '5',
      url: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&h=800&fit=crop',
      alt: 'Portrait of man looking serious',
      width: 800,
      height: 800,
      name: 'Jason Lee'
    },
    {
      id: '6',
      url: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&h=800&fit=crop',
      alt: 'Portrait of woman with red hair',
      width: 800,
      height: 800,
      name: 'Olivia Taylor'
    },
    {
      id: '7',
      url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=800&fit=crop',
      alt: 'Portrait of smiling man',
      width: 800,
      height: 800,
      name: 'David Rodriguez'
    },
    {
      id: '8',
      url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&h=800&fit=crop',
      alt: 'Portrait of woman with glasses',
      width: 800,
      height: 800,
      name: 'Nia Patel'
    },
    {
      id: '9',
      url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=800&fit=crop',
      alt: 'Portrait of woman with curly hair',
      width: 800,
      height: 800,
      name: 'Zoe Martinez'
    },
    {
      id: '10',
      url: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=800&h=800&fit=crop',
      alt: 'Portrait of serious man',
      width: 800,
      height: 800,
      name: 'Alex Thompson'
    },
    {
      id: '11',
      url: 'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=800&h=800&fit=crop',
      alt: 'Portrait of woman with dark hair',
      width: 800,
      height: 800,
      name: 'Jasmine Kim'
    },
    {
      id: '12',
      url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=800&fit=crop',
      alt: 'Portrait of smiling woman',
      width: 800,
      height: 800,
      name: 'Claire Wilson'
    }
  ];

  return (
    <div className="w-full mx-auto py-8">
      {/* Custom container with responsive margins */}
      <div className="mx-5 sm:mx-8 md:mx-12 lg:mx-20 xl:mx-[120px] 2xl:mx-[200px]">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 md:gap-[20px] xl:gap-[40px] 2xl:gap-[48px]">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="relative group overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative">
                <AspectRatio ratio={4/3}>
                  <img
                    src={photo.url}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                </AspectRatio>
                
                {/* Name overlay positioned in bottom third */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-4">
                  <p className="text-white text-lg font-medium ml-2">
                    {photo.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoGrid;
