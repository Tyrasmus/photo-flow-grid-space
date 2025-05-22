
import React from 'react';

interface Photo {
  id: string;
  url: string;
  alt: string;
  width: number;
  height: number;
}

const PhotoGrid = () => {
  const photos: Photo[] = [
    {
      id: '1',
      url: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop',
      alt: 'Woman sitting on a bed using a laptop',
      width: 800,
      height: 600
    },
    {
      id: '2',
      url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop',
      alt: 'Turned on gray laptop computer',
      width: 800,
      height: 600
    },
    {
      id: '3',
      url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
      alt: 'Macro photography of black circuit board',
      width: 800,
      height: 600
    },
    {
      id: '4',
      url: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop',
      alt: 'Monitor showing Java programming',
      width: 800,
      height: 600
    },
    {
      id: '5',
      url: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop',
      alt: 'Person using MacBook Pro',
      width: 800,
      height: 600
    },
    {
      id: '6',
      url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
      alt: 'Woman in white long sleeve shirt using black laptop computer',
      width: 800,
      height: 600
    },
    {
      id: '7',
      url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop',
      alt: 'White robot near brown wall',
      width: 800,
      height: 600
    },
    {
      id: '8',
      url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop',
      alt: 'Matrix movie still',
      width: 800,
      height: 600
    },
    {
      id: '9',
      url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop',
      alt: 'Gray and black laptop computer on surface',
      width: 800,
      height: 600
    },
    {
      id: '10',
      url: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop',
      alt: 'Colorful software or web code on a computer monitor',
      width: 800,
      height: 600
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="group relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={photo.url}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
            </div>
            
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white text-sm font-medium line-clamp-2">
                  {photo.alt}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGrid;
