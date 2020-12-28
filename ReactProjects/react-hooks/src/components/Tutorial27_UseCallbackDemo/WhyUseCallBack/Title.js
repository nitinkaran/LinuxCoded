import React from 'react';

function Title() {
    console.log('Title rendered');
    return (
        <div>
            <h1> UseCallBack implementation Component</h1>
        </div>
    );
}

/**
 * Using React.memo() checks whether there  is any update in props or state. If update is
 * there then only it renders the component otherwise NOT
 */
export default React.memo(Title);