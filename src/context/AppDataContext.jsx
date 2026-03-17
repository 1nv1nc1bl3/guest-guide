import { createContext, useContext } from 'react';
import { useAppData } from '../hooks/useAppData';

// create container for global data.
const AppDataContext = createContext();

export function AppDataProvider({ children }) {
    // fetch at API through hook
    const value = useAppData();
    return (
        // gives all application access to appData, isLoading, error
        <AppDataContext.Provider value={value}>
            {children}
        </AppDataContext.Provider>
    );
}

// Custom hook for easy access to Context
export function useAppDataContext() {
    const context = useContext(AppDataContext);
    if (!context) {
        throw new Error(
            'useAppDataContext must be used inside AppDataProvider',
        );
    }
    return context;
}
