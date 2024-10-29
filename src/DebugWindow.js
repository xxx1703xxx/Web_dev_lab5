import React from 'react';
import useNavigationHistory from './useNavigationHistory';
import './styles.css'; 

const DebugWindow = () => {
    const { history } = useNavigationHistory();

    return (
        <div className="debug-window">
            <h2>Navigation History</h2>
            <ul>
                {history.map((path, index) => (
                    <li key={index}>{path}</li>
                ))}
            </ul>
        </div>
    );
};

export default DebugWindow;
