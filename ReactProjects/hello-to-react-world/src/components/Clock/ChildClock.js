import React from 'react';

function ChildClock(props) {
    return (
        <div>
            <hr/ >
            <h1>Time in child component : {props.time}</h1>
        </div>
    );
}

export default ChildClock;