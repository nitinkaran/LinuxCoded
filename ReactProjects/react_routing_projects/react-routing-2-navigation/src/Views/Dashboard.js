import React from 'react';
import { useHistory } from 'react-router-dom';

const Dashboard = () => {
    let history = useHistory();

    return (
        <div>
            <h3>A Dashboard PAGE</h3>
            <button onClick={() => {history.push('/')}}>prev</button>
            <button onClick={() => {history.push('/items')}}>next</button>
        </div>
    );
};

export default Dashboard;