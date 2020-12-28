import React from 'react';

function Button(props) {
    const {handleClick, children} = props;
    console.log(children, ' prop rendered')
    return (
        <div>
            <button onClick={handleClick}>{children}</button>
        </div>
    );
}

/**
 * Using React.memo() checks whether there  is any update in props or state. If update is
 * there then only it renders the component otherwise NOT
 */
export default React.memo(Button);