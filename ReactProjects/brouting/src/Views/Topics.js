import React from 'react';
import history from '../history';

const Topics = () => {
    return (
        <div className="home-component">
            <h1 className="darker-heading">
                Topics Page
            </h1>
            <h4 className="faded-heading">
                A Topic page containing the list of topics to be studied
            </h4>
            <button onClick={() => history.push('/Details')}>PREV</button>
            <button onClick={() => history.push('/SubTopic1')}>NEXT</button>
        </div>
    );
};

export default Topics;
