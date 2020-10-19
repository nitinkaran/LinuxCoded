import React from 'react';
import { useHistory } from 'react-router-dom';

const Items = () => {
    let history = useHistory();

    return (
        <div>
            <h3>A Items PAGE</h3>
            <button onClick={() => {history.push('/dashboard')}}>prev</button>
            <button onClick={() => {history.push('/')}}>next</button>
        </div>
    );
};

export default Items;