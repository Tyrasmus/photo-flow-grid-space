
import { Photo } from '@/components/PhotoCard';

export const sortPhotosByPinned = (photos: Photo[]): Photo[] => {
  return [...photos].sort((a, b) => {
    if (a.pinned && !b.pinned) return -1;
    if (!a.pinned && b.pinned) return 1;
    return 0;
  });
};
