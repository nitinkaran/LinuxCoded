import React from 'react';

function Count(props) {
    const {children, value} = props;
    console.log(children, ' props rendered');
    return (
        <div>            
            <h1>{children}{value}</h1>
        </div>
    );
}

export default Count;