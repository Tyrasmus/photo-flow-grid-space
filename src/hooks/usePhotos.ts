
import { useState, useCallback } from 'react';
import { Photo } from '@/components/PhotoCard';
import { initialPhotos } from '@/data/photoData';
import { sortPhotosByPinned } from '@/utils/photoSorter';

export const usePhotos = () => {
  const [photos, setPhotos] = useState<Photo[]>(initialPhotos);

  const togglePin = useCallback((id: string) => {
    setPhotos(prevPhotos =>
      prevPhotos.map(photo =>
        photo.id === id ? { ...photo, pinned: !photo.pinned } : photo
      )
    );
  }, []);

  const sortedPhotos = sortPhotosByPinned(photos);

  return {
    photos: sortedPhotos,
    togglePin
  };
};
