import React, { createContext, useContext, useState } from 'react';

const AnotherContext = createContext();

const AnotherProvider = ({ children }) => {
    const [anotherData, setAnotherData] = useState("Another Data");

    return (
        <AnotherContext.Provider value={{ anotherData, setAnotherData }}>
            {children}
        </AnotherContext.Provider>
    );
};

const useAnotherData = () => useContext(AnotherContext);

export { AnotherProvider, useAnotherData };
