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

/**
 * Using React.memo() checks whether there  is any update in props or state. If update is
 * there then only it renders the component otherwise NOT
 */
export default React.memo(Count);