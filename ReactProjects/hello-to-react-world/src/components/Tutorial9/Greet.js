import React from 'react';

const Greet = props => {
    return (
        <div>
            Hello {props.name} !!! a.k.a {props.heroName}
            <span>
                {props.children}
            </span>
        </div>
    );
}

export default Greet;