import React from 'react';
import { useHistory } from 'react-router';

const HomePage = () => {
    const history = useHistory();

    const handleStart = () => {
        history.push(`/question`)
    }
    
    return (
        <div>
            <button onClick={handleStart}>Start Questionnaire</button>
        </div>
    )
}

export default HomePage;