import { createContext, useState, useContext } from 'react';

// Create the context
const MonthContext = createContext();

// Create a provider component
export const MonthProvider = ({ children }) => {
  const [selectedMonth, setSelectedMonth] = useState('Jan');
  const [isMonthly, setIsMonthly] = useState(true); // Add isMonthly state

  const toggleIsMonthly = () => {
    setIsMonthly((prev) => !prev); // Function to toggle between monthly and daily data
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
export const useMonth = () => useContext(MonthContext);
