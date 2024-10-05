// SortingContext.js
import React, { createContext, useContext, useState } from 'react';

const SortingContext = createContext();

export const SortingProvider = ({ children }) => {
    const [isSorted, setIsSorted] = useState(false);

    const toggleSort = () => {
        setIsSorted(prev => !prev); 
    };

    return (
        <SortingContext.Provider value={{ isSorted, toggleSort }}>
            {children}
        </SortingContext.Provider>
    );
};

export const useSorting = () => {
    return useContext(SortingContext);
};
