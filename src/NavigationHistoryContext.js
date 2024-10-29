import React, { createContext, useContext, useState } from 'react';

const NavigationHistoryContext = createContext();

export const NavigationHistoryProvider = ({ children }) => {
    const [history, setHistory] = useState([]);

    const addToHistory = (path) => {
        setHistory((prevHistory) => [...prevHistory, path]);
    };

    return (
        <NavigationHistoryContext.Provider value={{ history, addToHistory }}>
            {children}
        </NavigationHistoryContext.Provider>
    );
};

export const useNavigationHistory = () => useContext(NavigationHistoryContext);
