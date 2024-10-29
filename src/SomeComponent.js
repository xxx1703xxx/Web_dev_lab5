import React from 'react';
import useNavigationHistory from './useNavigationHistory';

const SomeComponent = () => {
    const { addToHistory } = useNavigationHistory();

    return (
        <div>
            <button onClick={() => addToHistory('/')}>Go to Home</button>
            <button onClick={() => addToHistory('/about')}>Go to About</button>
            <button onClick={() => addToHistory('/categories')}>Go to Categories</button>
        </div>
    );
};

export default SomeComponent;
