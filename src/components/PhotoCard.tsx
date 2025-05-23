
import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Pin } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Photo {
  id: string;
  url: string;
  alt: string;
  width: number;
  height: number;
  name?: string;
  pinned?: boolean;
}

interface PhotoCardProps {
  photo: Photo;
  isAnimating: boolean;
  onPinToggle: (id: string) => void;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ photo, isAnimating, onPinToggle }) => {
  return (
    <div
      className={cn(
        "relative group overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105",
        photo.pinned && isAnimating && "animate-fade-in-center",
        !photo.pinned && "animate-photo-appear"
      )}
      style={{
        animationDuration: '0.5s',
        animationFillMode: 'forwards'
      }}
    >
      <div className="relative">
        <AspectRatio ratio={2/3}>
          <img
            src={photo.url}
            alt={photo.alt}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
          />
        </AspectRatio>
        
        {/* Pin icon - aligned with consistent left margin */}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onPinToggle(photo.id);
          }}
          className={cn(
            "absolute top-2 left-3 bg-gray-900/70 p-1.5 rounded-full transition-opacity duration-200",
            photo.pinned 
              ? "opacity-100 text-white hover:bg-gray-800/90" 
              : "opacity-0 group-hover:opacity-100 text-gray-300 hover:text-white hover:bg-gray-800/90"
          )}
          aria-label={photo.pinned ? "Unpin" : "Pin"}
        >
          <Pin size={16} className={cn("transition-transform", photo.pinned && "fill-current")} />
        </button>
        
        {/* Name overlay positioned with the same left margin as the pin icon */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-4">
          <p className="text-white text-lg font-medium ml-3">
            {photo.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;
