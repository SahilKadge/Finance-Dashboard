import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the context type
export type MonthContextType = {
  selectedMonth: string;
  setSelectedMonth: (month: string) => void;
  isMonthly: boolean;
  toggleIsMonthly: () => void;
};

// Create the context with a default value of undefined
const MonthContext = createContext<MonthContextType | undefined>(undefined);

// Create a provider component
export const MonthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedMonth, setSelectedMonth] = useState<string>('Jan');
  const [isMonthly, setIsMonthly] = useState<boolean>(true);

  const toggleIsMonthly = () => {
    setIsMonthly((prev) => !prev);
  };

  return (
    <MonthContext.Provider
      value={{
        selectedMonth,
        setSelectedMonth,
        isMonthly,
        toggleIsMonthly,
      }}
    >
      {children}
    </MonthContext.Provider>
  );
};

// Custom hook to use the MonthContext
export const useMonth = (): MonthContextType => {
  const context = useContext(MonthContext);
  if (!context) {
    throw new Error('useMonth must be used within a MonthProvider');
  }
  return context;
};
