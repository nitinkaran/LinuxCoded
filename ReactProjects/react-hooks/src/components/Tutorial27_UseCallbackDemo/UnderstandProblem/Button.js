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

export default Button;