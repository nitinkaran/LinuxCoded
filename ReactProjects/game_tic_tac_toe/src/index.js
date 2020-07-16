import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board/Board';

const App = () => {
    return (
        <div className="tic-tac-toe">
            <Board />
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
