
export const photoAnimations = `
@keyframes slideInFade {
  0% {
    opacity: 0;
    transform: translateX(20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes photoAppear {
  0% {
    opacity: 0.7;
  }
  100% {
    opacity: 1;
  }
}

.animate-slide-in-fade {
  animation: slideInFade 0.5s ease-out forwards;
}

.animate-photo-appear {
  animation: photoAppear 0.4s ease-out forwards;
}
`;
