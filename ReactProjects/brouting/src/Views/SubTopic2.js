import React from 'react';
import history from '../history';

const SubTopic2 = () => {
    return (
        <div className="home-component">
            <h1 className="darker-heading">
                SubTopic2 Page
            </h1>
            <h4 className="faded-heading">
                SubTopic2 page contains least important topics from exam perspective
            </h4>
            <button onClick={() => history.push('/SubTopic1')}>PREV</button>
            <button onClick={() => history.push('/')}>NEXT</button>
        </div>
    );
};

export default SubTopic2;
