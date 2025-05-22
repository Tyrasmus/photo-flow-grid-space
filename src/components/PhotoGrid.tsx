
import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

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
      url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
      alt: 'Woman in white long sleeve shirt using black laptop computer',
      width: 800,
      height: 600
    },
    {
      id: '3',
      url: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&h=600&fit=crop',
      alt: 'Man in black and white checkered dress shirt',
      width: 800,
      height: 600
    },
    {
      id: '4',
      url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop',
      alt: 'People sitting near table with laptops',
      width: 800,
      height: 600
    },
    {
      id: '5',
      url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
      alt: 'Group of people working on laptops at table',
      width: 800,
      height: 600
    },
    {
      id: '6',
      url: 'https://images.unsplash.com/photo-1543269664-56d93c1b41a6?w=800&h=600&fit=crop',
      alt: 'Smiling young woman with headphones',
      width: 800,
      height: 600
    },
    {
      id: '7',
      url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
      alt: 'Portrait of a young man in a black t-shirt',
      width: 800,
      height: 600
    },
    {
      id: '8',
      url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop',
      alt: 'Woman standing and smiling at camera',
      width: 800,
      height: 600
    },
    {
      id: '9',
      url: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=800&h=600&fit=crop',
      alt: 'Woman with curly hair looking at camera',
      width: 800,
      height: 600
    },
    {
      id: '10',
      url: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=800&h=600&fit=crop',
      alt: 'Smiling man in gray shirt',
      width: 800,
      height: 600
    },
    {
      id: '11',
      url: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=600&fit=crop',
      alt: 'Woman with sunglasses and hat',
      width: 800,
      height: 600
    },
    {
      id: '12',
      url: 'https://images.unsplash.com/photo-1500048993953-d23a436266cf?w=800&h=600&fit=crop',
      alt: 'Group of friends laughing together',
      width: 800,
      height: 600
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="group relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <AspectRatio ratio={4/3}>
              <img
                src={photo.url}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
            </AspectRatio>
            
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
