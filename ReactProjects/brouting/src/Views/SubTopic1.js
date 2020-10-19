import React from 'react';
import history from '../history';

const SubTopic1 = () => {
    return (
        <div className="home-component">
            <h1 className="darker-heading">
                SubTop1 Page
            </h1>
            <h4 className="faded-heading">
                The topics listed under subtopic 1 are of utmost importance
            </h4>
            <button onClick={() => history.push('/Topics')}>PREV</button>
            <button onClick={() => history.push('/SubTopic2')}>NEXT</button>
        </div>
    );
};

export default SubTopic1;
