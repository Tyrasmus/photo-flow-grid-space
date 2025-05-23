import React, { useState } from 'react';
import PhotoCard, { Photo } from './PhotoCard';
import { photoAnimations } from '@/utils/animations';
import { Plus } from 'lucide-react';

const PhotoGrid = () => {
  const [photos, setPhotos] = useState<Photo[]>([
    {
      id: '1',
      url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=800&fit=crop',
      alt: 'Portrait of woman with short blonde hair',
      width: 800,
      height: 800,
      name: 'Emily Chen',
      pinned: false
    },
    {
      id: '2',
      url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=800&fit=crop',
      alt: 'Portrait of woman with dark hair',
      width: 800,
      height: 800,
      name: 'Sophie Williams',
      pinned: false
    },
    {
      id: '3',
      url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop',
      alt: 'Portrait of a young man',
      width: 800,
      height: 800,
      name: 'Marcus Johnson',
      pinned: false
    },
    {
      id: '4',
      url: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&h=800&fit=crop',
      alt: 'Portrait of smiling woman',
      width: 800,
      height: 800,
      name: 'Amelia Hart',
      pinned: false
    },
    {
      id: '5',
      url: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&h=800&fit=crop',
      alt: 'Portrait of man looking serious',
      width: 800,
      height: 800,
      name: 'Jason Lee',
      pinned: false
    },
    {
      id: '6',
      url: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&h=800&fit=crop',
      alt: 'Portrait of woman with red hair',
      width: 800,
      height: 800,
      name: 'Olivia Taylor',
      pinned: false
    },
    {
      id: '7',
      url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=800&fit=crop',
      alt: 'Portrait of smiling man',
      width: 800,
      height: 800,
      name: 'David Rodriguez',
      pinned: false
    },
    {
      id: '8',
      url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&h=800&fit=crop',
      alt: 'Portrait of woman with glasses',
      width: 800,
      height: 800,
      name: 'Nia Patel',
      pinned: false
    },
    {
      id: '9',
      url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=800&fit=crop',
      alt: 'Portrait of woman with curly hair',
      width: 800,
      height: 800,
      name: 'Zoe Martinez',
      pinned: false
    },
    {
      id: '10',
      url: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=800&h=800&fit=crop',
      alt: 'Portrait of serious man',
      width: 800,
      height: 800,
      name: 'Alex Thompson',
      pinned: false
    },
    {
      id: '11',
      url: 'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=800&h=800&fit=crop',
      alt: 'Portrait of woman with dark hair',
      width: 800,
      height: 800,
      name: 'Jasmine Kim',
      pinned: false
    },
    {
      id: '12',
      url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=800&fit=crop',
      alt: 'Portrait of smiling woman',
      width: 800,
      height: 800,
      name: 'Claire Wilson',
      pinned: false
    }
  ]);
  
  const [animatingId, setAnimatingId] = useState<string | null>(null);

  const togglePin = (id: string) => {
    const photo = photos.find(p => p.id === id);
    const isBeingPinned = photo && !photo.pinned;
    
    if (isBeingPinned) {
      setAnimatingId(id);
    }
    
    setPhotos(prevPhotos =>
      prevPhotos.map(photo =>
        photo.id === id ? { ...photo, pinned: !photo.pinned } : photo
      )
    );
    
    // Clear animation state after animation completes
    if (isBeingPinned) {
      setTimeout(() => {
        setAnimatingId(null);
      }, 600); // Match this with animation duration
    }
  };

  // Sort photos to show pinned ones first
  const sortedPhotos = [...photos].sort((a, b) => {
    if (a.pinned && !b.pinned) return -1;
    if (!a.pinned && b.pinned) return 1;
    return 0;
  });

  return (
    <div className="w-full mx-auto py-4 relative">
      {/* Custom container with responsive margins */}
      <div className="mx-[12px] xs:mx-5 sm:mx-8 md:mx-12 lg:mx-20 xl:mx-[120px] 2xl:mx-[200px]">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-[12px] xs:gap-5 md:gap-[20px] xl:gap-[40px] 2xl:gap-[48px]">
          {sortedPhotos.map((photo) => (
            <PhotoCard
              key={photo.id}
              photo={photo}
              isAnimating={photo.id === animatingId}
              onPinToggle={togglePin}
            />
          ))}
        </div>
      </div>
      
      {/* Removed the FloatingActionButton component reference */}
      
      {/* Add animations using style tag */}
      <style>
        {photoAnimations}
      </style>
    </div>
  );
};

export default PhotoGrid;
