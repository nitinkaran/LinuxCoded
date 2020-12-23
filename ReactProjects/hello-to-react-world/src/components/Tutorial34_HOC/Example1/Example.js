import React from 'react';
import ButtonCounter from './ButtonCounter';
import HoverCounter from './HoverCounter';

/**
 * Here we are using the same logic of counting in both the components. We are duplicating
 * the code. We can use the concept of LIFTING THE STATE UP but that is only possible in 
 * the current scenario where ButtonCounter and HoverCounter have same parent Example
 * 
 * But in other scenario where the components may not have the same parent we will use the
 * concept of Higher Order Component as mentioned in the Example2
 */

function Example() {
    return (
        <div>
            <ButtonCounter />
            <br />
            <HoverCounter />
        </div>
    );
}

export default Example;