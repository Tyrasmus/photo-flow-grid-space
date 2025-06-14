
import React from 'react';
import PhotoCard, { Photo } from './PhotoCard';

interface PhotoGridContainerProps {
  photos: Photo[];
  isAnimating: (id: string) => boolean;
  onPinToggle: (id: string) => void;
}

const PhotoGridContainer: React.FC<PhotoGridContainerProps> = ({
  photos,
  isAnimating,
  onPinToggle
}) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-[12px] xs:gap-5 md:gap-[20px] xl:gap-[20px] 2xl:gap-[40px]">
      {photos.map((photo) => (
        <PhotoCard
          key={photo.id}
          photo={photo}
          isAnimating={isAnimating(photo.id)}
          onPinToggle={onPinToggle}
        />
      ))}
    </div>
  );
};

export default PhotoGridContainer;
