import React from 'react';
import SquareCss from './SquareCss.css';

const Square = (props) => {
    return (
        <button 
        	className="square" 
        	onClick={() => {props.handleClick()}} >
            {props.value}
        </button>
    );
};

export default Square;
