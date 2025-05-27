
import { useState, useCallback } from 'react';

export const usePhotoAnimation = () => {
  const [animatingId, setAnimatingId] = useState<string | null>(null);

  const startAnimation = useCallback((id: string) => {
    setAnimatingId(id);
    setTimeout(() => {
      setAnimatingId(null);
    }, 600);
  }, []);

  const isAnimating = useCallback((id: string) => {
    return id === animatingId;
  }, [animatingId]);

  return {
    startAnimation,
    isAnimating
  };
};
