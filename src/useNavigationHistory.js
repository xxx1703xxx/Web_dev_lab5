
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const useNavigationHistory = () => {
    const [history, setHistory] = useState([]);
    const navigate = useNavigate();

    const addToHistory = (path) => {
        setHistory((prevHistory) => [...prevHistory, path]); 
        navigate(path); 
    };

    return { history, addToHistory };
};

export default useNavigationHistory;
