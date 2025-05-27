
export const photoAnimations = `
@keyframes fadeInFromCenter {
  0% {
    opacity: 0;
    transform: translateY(5px) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
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

@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-center {
  animation: fadeInFromCenter 0.5s ease-out forwards;
}

.animate-photo-appear {
  animation: photoAppear 0.4s ease-out forwards;
}

.animate-fade-in {
  animation: fade-in 0.3s ease-out forwards;
}
`;
