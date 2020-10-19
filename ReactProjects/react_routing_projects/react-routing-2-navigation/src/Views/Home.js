import React from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => {
    let history = useHistory();

    return (
        <div>
            <h2>A HOME PAGE</h2>
            <button 
                className="button" 
                onClick={() => {history.push('/dashboard')}}
            >
                NEXT
            </button>
        </div>
    );
};

export default Home;