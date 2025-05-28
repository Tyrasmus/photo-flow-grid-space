
import React, { createContext, useContext, useState, ReactNode } from 'react';

type RocketIconType = 'rocket1' | 'rocket2';

interface RocketIconContextType {
  selectedRocket: RocketIconType;
  setSelectedRocket: (rocket: RocketIconType) => void;
}

const RocketIconContext = createContext<RocketIconContextType | undefined>(undefined);

export const useRocketIcon = () => {
  const context = useContext(RocketIconContext);
  if (!context) {
    throw new Error('useRocketIcon must be used within a RocketIconProvider');
  }
  return context;
};

interface RocketIconProviderProps {
  children: ReactNode;
}

export const RocketIconProvider = ({ children }: RocketIconProviderProps) => {
  const [selectedRocket, setSelectedRocket] = useState<RocketIconType>('rocket1');

  return (
    <RocketIconContext.Provider value={{ selectedRocket, setSelectedRocket }}>
      {children}
    </RocketIconContext.Provider>
  );
};
