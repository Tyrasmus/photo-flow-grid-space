
import React from 'react';
import PhotoGridContainer from './PhotoGridContainer';
import { photoAnimations } from '@/utils/animations';
import { usePhotos } from '@/hooks/usePhotos';
import { usePhotoAnimation } from '@/hooks/usePhotoAnimation';

const PhotoGrid = () => {
  const { photos, togglePin } = usePhotos();
  const { startAnimation, isAnimating } = usePhotoAnimation();

  const handlePinToggle = (id: string) => {
    const photo = photos.find(p => p.id === id);
    const isBeingPinned = photo && !photo.pinned;
    
    if (isBeingPinned) {
      startAnimation(id);
    }
    
    togglePin(id);
  };

  return (
    <div className="w-full mx-auto py-4 relative">
      <PhotoGridContainer 
        photos={photos}
        isAnimating={isAnimating}
        onPinToggle={handlePinToggle}
      />
      
      <style>
        {photoAnimations}
      </style>
    </div>
  );
};

export default PhotoGrid;
